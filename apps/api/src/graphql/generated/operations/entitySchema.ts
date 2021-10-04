import { gql } from 'apollo-server-express';

export const entitySchema = gql`
  input AutoCompleteByEntityInput {
    entity: String!
    offset: Int
    totalCount: Int
    limit: Int
  }

  input AddEntityParent {
    id: String!
    entity: String
  }

  input AddEntityInput {
    entity: JSON
    parent: AddEntityParent
  }

  input ListEntityInput {
    entity: JSON
  }

  type AutoCompleteOptionShape {
    displayValue: String!
    value: String
    id: String
  }

  type AutoCompleteResponse {
    data: [AutoCompleteOptionShape]
    errorMessage: String
  }

  extend type Query {
    # Timestamp
    add10308(input: AddEntityInput): GenericEntity
    list10308(input: ListEntityInput): GenericEntity
    get10308(id: String): GenericEntity
    delete10308(id: String): GenericEntity
    update10308(entity: JSON): GenericEntity
    autoComplete10308(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # PortfolioOwner
    add10314(input: AddEntityInput): GenericEntity
    list10314(input: ListEntityInput): GenericEntity
    get10314(id: String): GenericEntity
    delete10314(id: String): GenericEntity
    update10314(entity: JSON): GenericEntity
    autoComplete10314(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Cohort
    add10318(input: AddEntityInput): GenericEntity
    list10318(input: ListEntityInput): GenericEntity
    get10318(id: String): GenericEntity
    delete10318(id: String): GenericEntity
    update10318(entity: JSON): GenericEntity
    autoComplete10318(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Company
    add12377(input: AddEntityInput): GenericEntity
    list12377(input: ListEntityInput): GenericEntity
    get12377(id: String): GenericEntity
    delete12377(id: String): GenericEntity
    update12377(entity: JSON): GenericEntity
    autoComplete12377(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Margin
    add12378(input: AddEntityInput): GenericEntity
    list12378(input: ListEntityInput): GenericEntity
    get12378(id: String): GenericEntity
    delete12378(id: String): GenericEntity
    update12378(entity: JSON): GenericEntity
    autoComplete12378(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Geography
    add12664(input: AddEntityInput): GenericEntity
    list12664(input: ListEntityInput): GenericEntity
    get12664(id: String): GenericEntity
    delete12664(id: String): GenericEntity
    update12664(entity: JSON): GenericEntity
    autoComplete12664(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Segment
    add12666(input: AddEntityInput): GenericEntity
    list12666(input: ListEntityInput): GenericEntity
    get12666(id: String): GenericEntity
    delete12666(id: String): GenericEntity
    update12666(entity: JSON): GenericEntity
    autoComplete12666(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Vertical
    add12667(input: AddEntityInput): GenericEntity
    list12667(input: ListEntityInput): GenericEntity
    get12667(id: String): GenericEntity
    delete12667(id: String): GenericEntity
    update12667(entity: JSON): GenericEntity
    autoComplete12667(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # GrowthProfile
    add12669(input: AddEntityInput): GenericEntity
    list12669(input: ListEntityInput): GenericEntity
    get12669(id: String): GenericEntity
    delete12669(id: String): GenericEntity
    update12669(entity: JSON): GenericEntity
    autoComplete12669(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # SizeProfile
    add12670(input: AddEntityInput): GenericEntity
    list12670(input: ListEntityInput): GenericEntity
    get12670(id: String): GenericEntity
    delete12670(id: String): GenericEntity
    update12670(entity: JSON): GenericEntity
    autoComplete12670(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # QuarterResults
    add12671(input: AddEntityInput): GenericEntity
    list12671(input: ListEntityInput): GenericEntity
    get12671(id: String): GenericEntity
    delete12671(id: String): GenericEntity
    update12671(entity: JSON): GenericEntity
    autoComplete12671(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # BugdetEbidta
    add12672(input: AddEntityInput): GenericEntity
    list12672(input: ListEntityInput): GenericEntity
    get12672(id: String): GenericEntity
    delete12672(id: String): GenericEntity
    update12672(entity: JSON): GenericEntity
    autoComplete12672(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # GrowthEbitda
    add12673(input: AddEntityInput): GenericEntity
    list12673(input: ListEntityInput): GenericEntity
    get12673(id: String): GenericEntity
    delete12673(id: String): GenericEntity
    update12673(entity: JSON): GenericEntity
    autoComplete12673(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Revenue
    add12674(input: AddEntityInput): GenericEntity
    list12674(input: ListEntityInput): GenericEntity
    get12674(id: String): GenericEntity
    delete12674(id: String): GenericEntity
    update12674(entity: JSON): GenericEntity
    autoComplete12674(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # EbitdaGrowthBudgeted
    add12675(input: AddEntityInput): GenericEntity
    list12675(input: ListEntityInput): GenericEntity
    get12675(id: String): GenericEntity
    delete12675(id: String): GenericEntity
    update12675(entity: JSON): GenericEntity
    autoComplete12675(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # GrowthRevBudgeted
    add12676(input: AddEntityInput): GenericEntity
    list12676(input: ListEntityInput): GenericEntity
    get12676(id: String): GenericEntity
    delete12676(id: String): GenericEntity
    update12676(entity: JSON): GenericEntity
    autoComplete12676(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # BudgetedEbitdaMargins
    add12677(input: AddEntityInput): GenericEntity
    list12677(input: ListEntityInput): GenericEntity
    get12677(id: String): GenericEntity
    delete12677(id: String): GenericEntity
    update12677(entity: JSON): GenericEntity
    autoComplete12677(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # RevenueVsBudget
    add12678(input: AddEntityInput): GenericEntity
    list12678(input: ListEntityInput): GenericEntity
    get12678(id: String): GenericEntity
    delete12678(id: String): GenericEntity
    update12678(entity: JSON): GenericEntity
    autoComplete12678(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Ebidta
    add12679(input: AddEntityInput): GenericEntity
    list12679(input: ListEntityInput): GenericEntity
    get12679(id: String): GenericEntity
    delete12679(id: String): GenericEntity
    update12679(entity: JSON): GenericEntity
    autoComplete12679(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # ActualEbitdaMargins
    add12680(input: AddEntityInput): GenericEntity
    list12680(input: ListEntityInput): GenericEntity
    get12680(id: String): GenericEntity
    delete12680(id: String): GenericEntity
    update12680(entity: JSON): GenericEntity
    autoComplete12680(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # BudgetRevenue
    add12681(input: AddEntityInput): GenericEntity
    list12681(input: ListEntityInput): GenericEntity
    get12681(id: String): GenericEntity
    delete12681(id: String): GenericEntity
    update12681(entity: JSON): GenericEntity
    autoComplete12681(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # EbitdaVsBudget
    add12682(input: AddEntityInput): GenericEntity
    list12682(input: ListEntityInput): GenericEntity
    get12682(id: String): GenericEntity
    delete12682(id: String): GenericEntity
    update12682(entity: JSON): GenericEntity
    autoComplete12682(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # RuleOf40Budgeted
    add12683(input: AddEntityInput): GenericEntity
    list12683(input: ListEntityInput): GenericEntity
    get12683(id: String): GenericEntity
    delete12683(id: String): GenericEntity
    update12683(entity: JSON): GenericEntity
    autoComplete12683(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # GrowthRevenue
    add12684(input: AddEntityInput): GenericEntity
    list12684(input: ListEntityInput): GenericEntity
    get12684(id: String): GenericEntity
    delete12684(id: String): GenericEntity
    update12684(entity: JSON): GenericEntity
    autoComplete12684(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # RuleOf40Actual
    add12685(input: AddEntityInput): GenericEntity
    list12685(input: ListEntityInput): GenericEntity
    get12685(id: String): GenericEntity
    delete12685(id: String): GenericEntity
    update12685(entity: JSON): GenericEntity
    autoComplete12685(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # ActualVariableMargin
    add12686(input: AddEntityInput): GenericEntity
    list12686(input: ListEntityInput): GenericEntity
    get12686(id: String): GenericEntity
    delete12686(id: String): GenericEntity
    update12686(entity: JSON): GenericEntity
    autoComplete12686(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # BudgetedVariableMargin
    add12687(input: AddEntityInput): GenericEntity
    list12687(input: ListEntityInput): GenericEntity
    get12687(id: String): GenericEntity
    delete12687(id: String): GenericEntity
    update12687(entity: JSON): GenericEntity
    autoComplete12687(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # GrowthRate
    add12688(input: AddEntityInput): GenericEntity
    list12688(input: ListEntityInput): GenericEntity
    get12688(id: String): GenericEntity
    delete12688(id: String): GenericEntity
    update12688(entity: JSON): GenericEntity
    autoComplete12688(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # CompanyMarginGroup
    add12690(input: AddEntityInput): GenericEntity
    list12690(input: ListEntityInput): GenericEntity
    get12690(id: String): GenericEntity
    delete12690(id: String): GenericEntity
    update12690(entity: JSON): GenericEntity
    autoComplete12690(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # CohortName
    add38642(input: AddEntityInput): GenericEntity
    list38642(input: ListEntityInput): GenericEntity
    get38642(id: String): GenericEntity
    delete38642(id: String): GenericEntity
    update38642(entity: JSON): GenericEntity
    autoComplete38642(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # CohortUrl
    add38643(input: AddEntityInput): GenericEntity
    list38643(input: ListEntityInput): GenericEntity
    get38643(id: String): GenericEntity
    delete38643(id: String): GenericEntity
    update38643(entity: JSON): GenericEntity
    autoComplete38643(input: AutoCompleteByEntityInput): AutoCompleteResponse
  }
`;
