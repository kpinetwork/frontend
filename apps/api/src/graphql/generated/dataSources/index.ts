import { ApiTimestamp } from '../../custom/entityResolvers/api10308';
import { ApiPortfolioOwner } from '../../custom/entityResolvers/api10314';
import { ApiCohort } from '../../custom/entityResolvers/api10318';
import { ApiCompany } from '../../custom/entityResolvers/api12377';
import { ApiMargin } from '../../custom/entityResolvers/api12378';
import { ApiGeography } from '../../custom/entityResolvers/api12664';
import { ApiSegment } from '../../custom/entityResolvers/api12666';
import { ApiVertical } from '../../custom/entityResolvers/api12667';
import { ApiGrowthProfile } from '../../custom/entityResolvers/api12669';
import { ApiSizeProfile } from '../../custom/entityResolvers/api12670';
import { ApiQuarterResults } from '../../custom/entityResolvers/api12671';
import { ApiBugdetEbidta } from '../../custom/entityResolvers/api12672';
import { ApiGrowthEbitda } from '../../custom/entityResolvers/api12673';
import { ApiRevenue } from '../../custom/entityResolvers/api12674';
import { ApiEbitdaGrowthBudgeted } from '../../custom/entityResolvers/api12675';
import { ApiGrowthRevBudgeted } from '../../custom/entityResolvers/api12676';
import { ApiBudgetedEbitdaMargins } from '../../custom/entityResolvers/api12677';
import { ApiRevenueVsBudget } from '../../custom/entityResolvers/api12678';
import { ApiEbidta } from '../../custom/entityResolvers/api12679';
import { ApiActualEbitdaMargins } from '../../custom/entityResolvers/api12680';
import { ApiBudgetRevenue } from '../../custom/entityResolvers/api12681';
import { ApiEbitdaVsBudget } from '../../custom/entityResolvers/api12682';
import { ApiRuleOf40Budgeted } from '../../custom/entityResolvers/api12683';
import { ApiGrowthRevenue } from '../../custom/entityResolvers/api12684';
import { ApiRuleOf40Actual } from '../../custom/entityResolvers/api12685';
import { ApiActualVariableMargin } from '../../custom/entityResolvers/api12686';
import { ApiBudgetedVariableMargin } from '../../custom/entityResolvers/api12687';
import { ApiGrowthRate } from '../../custom/entityResolvers/api12688';
import { ApiCompanyMarginGroup } from '../../custom/entityResolvers/api12690';
import { ApiCohortName } from '../../custom/entityResolvers/api38642';
import { ApiCohortUrl } from '../../custom/entityResolvers/api38643';
import { DataSource } from 'apollo-datasource';
import { FiltersApi } from '../../custom/filtersResolver/filtersApi';
import { FiltersFakeApi } from './filtersFakeApi';
import { FormatCheckApi } from '../../custom/formatCheckResolver/formatCheckApi';
import { FormatCheckFakeApi } from './formatCheckFakeApi';
import { WidgetApi } from './widgetApi';
import { WidgetFakeApi } from './widgetFakeApi';

export const dataSources = (): Record<string, DataSource> => ({
  filtersFakeApi: new FiltersFakeApi(),
  filtersApi: new FiltersApi(),
  formatCheckFakeApi: new FormatCheckFakeApi(),
  formatCheckApi: new FormatCheckApi(),
  widgetApi: new WidgetApi(),
  widgetFakeApi: new WidgetFakeApi(),
  api10308: new ApiTimestamp(),
  api10314: new ApiPortfolioOwner(),
  api10318: new ApiCohort(),
  api12377: new ApiCompany(),
  api12378: new ApiMargin(),
  api12664: new ApiGeography(),
  api12666: new ApiSegment(),
  api12667: new ApiVertical(),
  api12669: new ApiGrowthProfile(),
  api12670: new ApiSizeProfile(),
  api12671: new ApiQuarterResults(),
  api12672: new ApiBugdetEbidta(),
  api12673: new ApiGrowthEbitda(),
  api12674: new ApiRevenue(),
  api12675: new ApiEbitdaGrowthBudgeted(),
  api12676: new ApiGrowthRevBudgeted(),
  api12677: new ApiBudgetedEbitdaMargins(),
  api12678: new ApiRevenueVsBudget(),
  api12679: new ApiEbidta(),
  api12680: new ApiActualEbitdaMargins(),
  api12681: new ApiBudgetRevenue(),
  api12682: new ApiEbitdaVsBudget(),
  api12683: new ApiRuleOf40Budgeted(),
  api12684: new ApiGrowthRevenue(),
  api12685: new ApiRuleOf40Actual(),
  api12686: new ApiActualVariableMargin(),
  api12687: new ApiBudgetedVariableMargin(),
  api12688: new ApiGrowthRate(),
  api12690: new ApiCompanyMarginGroup(),
  api38642: new ApiCohortName(),
  api38643: new ApiCohortUrl(),
});
