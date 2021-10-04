import { isNilOrEmpty } from '@kleeen/common/utils';
import { Maybe } from '@kleeen/types';

export function getValidationResponseErrors(
  response: Maybe<{ isValid?: boolean; errors?: { message: string }[] }>,
  className: string,
): JSX.Element | null {
  if (isNilOrEmpty(response?.errors) || response?.isValid) return null;
  return (
    <ul className={className}>
      {response.errors.map((error, i) => {
        return <li>{error.message}</li>;
      })}
    </ul>
  );
}
