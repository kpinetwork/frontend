#!/bin/sh

set -eu

type aws > /dev/null 2>&1 && type jq > /dev/null 2>&1 || {
  echo 'Required aws-cli and jq'
  exit 1
}

repository="$1_kpinetwork_kleeen_api_repo"
echo "$repository: Process initialized"

response=$(aws ecr list-images --repository-name $repository --filter tagStatus=UNTAGGED --max-items 100)
untaggedImages=$(echo $response | jq -c '.imageIds')

if [ "$untaggedImages" == "[]" ];
then
  echo "$repository: Untagged image not found"
else
  echo "$repository: Deleting untagged images"
  aws ecr batch-delete-image --repository-name $repository --image-ids $untaggedImages
fi
