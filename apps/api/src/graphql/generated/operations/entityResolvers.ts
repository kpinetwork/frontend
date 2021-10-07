import { IResolvers } from 'apollo-server-express';
import { DispatchCustomActionResults } from '../../../types';

export const entityResolvers: IResolvers = {
  Query: {
    // Timestamp Resolvers
    add10308: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api10308.addEntity(input.entity, input.parent),
    }),
    list10308: (_parent, args, { dataSources }) => ({ data: dataSources.api10308.listEntity(args) }),
    get10308: (_parent, { id }, { dataSources }) => ({ data: dataSources.api10308.getEntity(id) }),
    delete10308: (_parent, { id }, { dataSources }) => ({ data: dataSources.api10308.deleteEntity(id) }),
    update10308: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api10308.updateEntity(entity),
    }),
    autoComplete10308: (_parent, params, { dataSources }) => ({
      data: dataSources.api10308.getAutoCompleteValues(params.input),
    }),

    // PortfolioOwner Resolvers
    add10314: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api10314.addEntity(input.entity, input.parent),
    }),
    list10314: (_parent, args, { dataSources }) => ({ data: dataSources.api10314.listEntity(args) }),
    get10314: (_parent, { id }, { dataSources }) => ({ data: dataSources.api10314.getEntity(id) }),
    delete10314: (_parent, { id }, { dataSources }) => ({ data: dataSources.api10314.deleteEntity(id) }),
    update10314: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api10314.updateEntity(entity),
    }),
    autoComplete10314: (_parent, params, { dataSources }) => ({
      data: dataSources.api10314.getAutoCompleteValues(params.input),
    }),

    // Cohort Resolvers
    add10318: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api10318.addEntity(input.entity, input.parent),
    }),
    list10318: (_parent, args, { dataSources }) => ({ data: dataSources.api10318.listEntity(args) }),
    get10318: (_parent, { id }, { dataSources }) => ({ data: dataSources.api10318.getEntity(id) }),
    delete10318: (_parent, { id }, { dataSources }) => ({ data: dataSources.api10318.deleteEntity(id) }),
    update10318: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api10318.updateEntity(entity),
    }),
    autoComplete10318: (_parent, params, { dataSources }) => ({
      data: dataSources.api10318.getAutoCompleteValues(params.input),
    }),

    // Company Resolvers
    add12377: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12377.addEntity(input.entity, input.parent),
    }),
    list12377: (_parent, args, { dataSources }) => ({ data: dataSources.api12377.listEntity(args) }),
    get12377: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12377.getEntity(id) }),
    delete12377: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12377.deleteEntity(id) }),
    update12377: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12377.updateEntity(entity),
    }),
    autoComplete12377: (_parent, params, { dataSources }) => ({
      data: dataSources.api12377.getAutoCompleteValues(params.input),
    }),

    // Margin Resolvers
    add12378: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12378.addEntity(input.entity, input.parent),
    }),
    list12378: (_parent, args, { dataSources }) => ({ data: dataSources.api12378.listEntity(args) }),
    get12378: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12378.getEntity(id) }),
    delete12378: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12378.deleteEntity(id) }),
    update12378: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12378.updateEntity(entity),
    }),
    autoComplete12378: (_parent, params, { dataSources }) => ({
      data: dataSources.api12378.getAutoCompleteValues(params.input),
    }),

    // Geography Resolvers
    add12664: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12664.addEntity(input.entity, input.parent),
    }),
    list12664: (_parent, args, { dataSources }) => ({ data: dataSources.api12664.listEntity(args) }),
    get12664: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12664.getEntity(id) }),
    delete12664: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12664.deleteEntity(id) }),
    update12664: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12664.updateEntity(entity),
    }),
    autoComplete12664: (_parent, params, { dataSources }) => ({
      data: dataSources.api12664.getAutoCompleteValues(params.input),
    }),

    // Segment Resolvers
    add12666: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12666.addEntity(input.entity, input.parent),
    }),
    list12666: (_parent, args, { dataSources }) => ({ data: dataSources.api12666.listEntity(args) }),
    get12666: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12666.getEntity(id) }),
    delete12666: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12666.deleteEntity(id) }),
    update12666: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12666.updateEntity(entity),
    }),
    autoComplete12666: (_parent, params, { dataSources }) => ({
      data: dataSources.api12666.getAutoCompleteValues(params.input),
    }),

    // Vertical Resolvers
    add12667: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12667.addEntity(input.entity, input.parent),
    }),
    list12667: (_parent, args, { dataSources }) => ({ data: dataSources.api12667.listEntity(args) }),
    get12667: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12667.getEntity(id) }),
    delete12667: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12667.deleteEntity(id) }),
    update12667: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12667.updateEntity(entity),
    }),
    autoComplete12667: (_parent, params, { dataSources }) => ({
      data: dataSources.api12667.getAutoCompleteValues(params.input),
    }),

    // GrowthProfile Resolvers
    add12669: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12669.addEntity(input.entity, input.parent),
    }),
    list12669: (_parent, args, { dataSources }) => ({ data: dataSources.api12669.listEntity(args) }),
    get12669: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12669.getEntity(id) }),
    delete12669: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12669.deleteEntity(id) }),
    update12669: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12669.updateEntity(entity),
    }),
    autoComplete12669: (_parent, params, { dataSources }) => ({
      data: dataSources.api12669.getAutoCompleteValues(params.input),
    }),

    // SizeProfile Resolvers
    add12670: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12670.addEntity(input.entity, input.parent),
    }),
    list12670: (_parent, args, { dataSources }) => ({ data: dataSources.api12670.listEntity(args) }),
    get12670: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12670.getEntity(id) }),
    delete12670: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12670.deleteEntity(id) }),
    update12670: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12670.updateEntity(entity),
    }),
    autoComplete12670: (_parent, params, { dataSources }) => ({
      data: dataSources.api12670.getAutoCompleteValues(params.input),
    }),

    // QuarterResults Resolvers
    add12671: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12671.addEntity(input.entity, input.parent),
    }),
    list12671: (_parent, args, { dataSources }) => ({ data: dataSources.api12671.listEntity(args) }),
    get12671: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12671.getEntity(id) }),
    delete12671: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12671.deleteEntity(id) }),
    update12671: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12671.updateEntity(entity),
    }),
    autoComplete12671: (_parent, params, { dataSources }) => ({
      data: dataSources.api12671.getAutoCompleteValues(params.input),
    }),

    // BugdetEbidta Resolvers
    add12672: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12672.addEntity(input.entity, input.parent),
    }),
    list12672: (_parent, args, { dataSources }) => ({ data: dataSources.api12672.listEntity(args) }),
    get12672: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12672.getEntity(id) }),
    delete12672: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12672.deleteEntity(id) }),
    update12672: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12672.updateEntity(entity),
    }),
    autoComplete12672: (_parent, params, { dataSources }) => ({
      data: dataSources.api12672.getAutoCompleteValues(params.input),
    }),

    // GrowthEbitda Resolvers
    add12673: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12673.addEntity(input.entity, input.parent),
    }),
    list12673: (_parent, args, { dataSources }) => ({ data: dataSources.api12673.listEntity(args) }),
    get12673: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12673.getEntity(id) }),
    delete12673: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12673.deleteEntity(id) }),
    update12673: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12673.updateEntity(entity),
    }),
    autoComplete12673: (_parent, params, { dataSources }) => ({
      data: dataSources.api12673.getAutoCompleteValues(params.input),
    }),

    // Revenue Resolvers
    add12674: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12674.addEntity(input.entity, input.parent),
    }),
    list12674: (_parent, args, { dataSources }) => ({ data: dataSources.api12674.listEntity(args) }),
    get12674: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12674.getEntity(id) }),
    delete12674: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12674.deleteEntity(id) }),
    update12674: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12674.updateEntity(entity),
    }),
    autoComplete12674: (_parent, params, { dataSources }) => ({
      data: dataSources.api12674.getAutoCompleteValues(params.input),
    }),

    // EbitdaGrowthBudgeted Resolvers
    add12675: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12675.addEntity(input.entity, input.parent),
    }),
    list12675: (_parent, args, { dataSources }) => ({ data: dataSources.api12675.listEntity(args) }),
    get12675: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12675.getEntity(id) }),
    delete12675: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12675.deleteEntity(id) }),
    update12675: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12675.updateEntity(entity),
    }),
    autoComplete12675: (_parent, params, { dataSources }) => ({
      data: dataSources.api12675.getAutoCompleteValues(params.input),
    }),

    // GrowthRevBudgeted Resolvers
    add12676: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12676.addEntity(input.entity, input.parent),
    }),
    list12676: (_parent, args, { dataSources }) => ({ data: dataSources.api12676.listEntity(args) }),
    get12676: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12676.getEntity(id) }),
    delete12676: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12676.deleteEntity(id) }),
    update12676: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12676.updateEntity(entity),
    }),
    autoComplete12676: (_parent, params, { dataSources }) => ({
      data: dataSources.api12676.getAutoCompleteValues(params.input),
    }),

    // BudgetedEbitdaMargins Resolvers
    add12677: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12677.addEntity(input.entity, input.parent),
    }),
    list12677: (_parent, args, { dataSources }) => ({ data: dataSources.api12677.listEntity(args) }),
    get12677: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12677.getEntity(id) }),
    delete12677: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12677.deleteEntity(id) }),
    update12677: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12677.updateEntity(entity),
    }),
    autoComplete12677: (_parent, params, { dataSources }) => ({
      data: dataSources.api12677.getAutoCompleteValues(params.input),
    }),

    // RevenueVsBudget Resolvers
    add12678: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12678.addEntity(input.entity, input.parent),
    }),
    list12678: (_parent, args, { dataSources }) => ({ data: dataSources.api12678.listEntity(args) }),
    get12678: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12678.getEntity(id) }),
    delete12678: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12678.deleteEntity(id) }),
    update12678: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12678.updateEntity(entity),
    }),
    autoComplete12678: (_parent, params, { dataSources }) => ({
      data: dataSources.api12678.getAutoCompleteValues(params.input),
    }),

    // Ebidta Resolvers
    add12679: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12679.addEntity(input.entity, input.parent),
    }),
    list12679: (_parent, args, { dataSources }) => ({ data: dataSources.api12679.listEntity(args) }),
    get12679: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12679.getEntity(id) }),
    delete12679: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12679.deleteEntity(id) }),
    update12679: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12679.updateEntity(entity),
    }),
    autoComplete12679: (_parent, params, { dataSources }) => ({
      data: dataSources.api12679.getAutoCompleteValues(params.input),
    }),

    // ActualEbitdaMargins Resolvers
    add12680: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12680.addEntity(input.entity, input.parent),
    }),
    list12680: (_parent, args, { dataSources }) => ({ data: dataSources.api12680.listEntity(args) }),
    get12680: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12680.getEntity(id) }),
    delete12680: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12680.deleteEntity(id) }),
    update12680: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12680.updateEntity(entity),
    }),
    autoComplete12680: (_parent, params, { dataSources }) => ({
      data: dataSources.api12680.getAutoCompleteValues(params.input),
    }),

    // BudgetRevenue Resolvers
    add12681: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12681.addEntity(input.entity, input.parent),
    }),
    list12681: (_parent, args, { dataSources }) => ({ data: dataSources.api12681.listEntity(args) }),
    get12681: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12681.getEntity(id) }),
    delete12681: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12681.deleteEntity(id) }),
    update12681: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12681.updateEntity(entity),
    }),
    autoComplete12681: (_parent, params, { dataSources }) => ({
      data: dataSources.api12681.getAutoCompleteValues(params.input),
    }),

    // EbitdaVsBudget Resolvers
    add12682: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12682.addEntity(input.entity, input.parent),
    }),
    list12682: (_parent, args, { dataSources }) => ({ data: dataSources.api12682.listEntity(args) }),
    get12682: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12682.getEntity(id) }),
    delete12682: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12682.deleteEntity(id) }),
    update12682: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12682.updateEntity(entity),
    }),
    autoComplete12682: (_parent, params, { dataSources }) => ({
      data: dataSources.api12682.getAutoCompleteValues(params.input),
    }),

    // RuleOf40Budgeted Resolvers
    add12683: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12683.addEntity(input.entity, input.parent),
    }),
    list12683: (_parent, args, { dataSources }) => ({ data: dataSources.api12683.listEntity(args) }),
    get12683: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12683.getEntity(id) }),
    delete12683: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12683.deleteEntity(id) }),
    update12683: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12683.updateEntity(entity),
    }),
    autoComplete12683: (_parent, params, { dataSources }) => ({
      data: dataSources.api12683.getAutoCompleteValues(params.input),
    }),

    // GrowthRevenue Resolvers
    add12684: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12684.addEntity(input.entity, input.parent),
    }),
    list12684: (_parent, args, { dataSources }) => ({ data: dataSources.api12684.listEntity(args) }),
    get12684: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12684.getEntity(id) }),
    delete12684: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12684.deleteEntity(id) }),
    update12684: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12684.updateEntity(entity),
    }),
    autoComplete12684: (_parent, params, { dataSources }) => ({
      data: dataSources.api12684.getAutoCompleteValues(params.input),
    }),

    // RuleOf40Actual Resolvers
    add12685: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12685.addEntity(input.entity, input.parent),
    }),
    list12685: (_parent, args, { dataSources }) => ({ data: dataSources.api12685.listEntity(args) }),
    get12685: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12685.getEntity(id) }),
    delete12685: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12685.deleteEntity(id) }),
    update12685: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12685.updateEntity(entity),
    }),
    autoComplete12685: (_parent, params, { dataSources }) => ({
      data: dataSources.api12685.getAutoCompleteValues(params.input),
    }),

    // ActualVariableMargin Resolvers
    add12686: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12686.addEntity(input.entity, input.parent),
    }),
    list12686: (_parent, args, { dataSources }) => ({ data: dataSources.api12686.listEntity(args) }),
    get12686: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12686.getEntity(id) }),
    delete12686: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12686.deleteEntity(id) }),
    update12686: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12686.updateEntity(entity),
    }),
    autoComplete12686: (_parent, params, { dataSources }) => ({
      data: dataSources.api12686.getAutoCompleteValues(params.input),
    }),

    // BudgetedVariableMargin Resolvers
    add12687: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12687.addEntity(input.entity, input.parent),
    }),
    list12687: (_parent, args, { dataSources }) => ({ data: dataSources.api12687.listEntity(args) }),
    get12687: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12687.getEntity(id) }),
    delete12687: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12687.deleteEntity(id) }),
    update12687: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12687.updateEntity(entity),
    }),
    autoComplete12687: (_parent, params, { dataSources }) => ({
      data: dataSources.api12687.getAutoCompleteValues(params.input),
    }),

    // GrowthRate Resolvers
    add12688: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12688.addEntity(input.entity, input.parent),
    }),
    list12688: (_parent, args, { dataSources }) => ({ data: dataSources.api12688.listEntity(args) }),
    get12688: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12688.getEntity(id) }),
    delete12688: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12688.deleteEntity(id) }),
    update12688: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12688.updateEntity(entity),
    }),
    autoComplete12688: (_parent, params, { dataSources }) => ({
      data: dataSources.api12688.getAutoCompleteValues(params.input),
    }),

    // CompanyMarginGroup Resolvers
    add12690: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api12690.addEntity(input.entity, input.parent),
    }),
    list12690: (_parent, args, { dataSources }) => ({ data: dataSources.api12690.listEntity(args) }),
    get12690: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12690.getEntity(id) }),
    delete12690: (_parent, { id }, { dataSources }) => ({ data: dataSources.api12690.deleteEntity(id) }),
    update12690: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api12690.updateEntity(entity),
    }),
    autoComplete12690: (_parent, params, { dataSources }) => ({
      data: dataSources.api12690.getAutoCompleteValues(params.input),
    }),

    // CohortName Resolvers
    add38642: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api38642.addEntity(input.entity, input.parent),
    }),
    list38642: (_parent, args, { dataSources }) => ({ data: dataSources.api38642.listEntity(args) }),
    get38642: (_parent, { id }, { dataSources }) => ({ data: dataSources.api38642.getEntity(id) }),
    delete38642: (_parent, { id }, { dataSources }) => ({ data: dataSources.api38642.deleteEntity(id) }),
    update38642: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api38642.updateEntity(entity),
    }),
    autoComplete38642: (_parent, params, { dataSources }) => ({
      data: dataSources.api38642.getAutoCompleteValues(params.input),
    }),

    // CohortUrl Resolvers
    add38643: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api38643.addEntity(input.entity, input.parent),
    }),
    list38643: (_parent, args, { dataSources }) => ({ data: dataSources.api38643.listEntity(args) }),
    get38643: (_parent, { id }, { dataSources }) => ({ data: dataSources.api38643.getEntity(id) }),
    delete38643: (_parent, { id }, { dataSources }) => ({ data: dataSources.api38643.deleteEntity(id) }),
    update38643: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api38643.updateEntity(entity),
    }),
    autoComplete38643: (_parent, params, { dataSources }) => ({
      data: dataSources.api38643.getAutoCompleteValues(params.input),
    }),
  },
};
