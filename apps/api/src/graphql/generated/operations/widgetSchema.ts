/* eslint-disable max-lines */
import { gql } from 'apollo-server-express';

export const widgetSchema = gql`
  type GraphResult {
    crossLinking: JSON
    format: JSON
    results: JSON
    series: JSON
  }

  type MultiTransFormationResults {
    crossLinking: JSON
    format: JSON
    results: JSON
    transformation: String!
  }

  type ListingResult {
    data: JSON
    format: JSON
    pagination: JSON
  }

  input DataListingArgs {
    attributes: JSON!
    entity: String!
    filters: JSON
    pagination: JSON
    sorting: [JSON!]
  }

  input MultiTransFormationArgs {
    attributes: [String]
    entity: String!
    filters: JSON
    transformations: [String!]!
  }

  input CustomActionArgs {
    entity: String!
    functionName: String!
    filters: JSON
  }

  type Filters {
    accessLevel: AccessLevel!
    name: String!
    statisticalType: String!
  }

  type WorkflowFiltersResult {
    filters: [Filters!]!
  }

    extend type Query {
          # Widget Summary
    # View: companyDetails
    # Widget: Company Summary
    # Value: company - No Aggregation
    # Widget type: behavior
    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: companyDetails
    # Widget: Company Summary
    # Value: geography - No Aggregation
    # Widget type: behavior
    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12664(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: companyDetails
    # Widget: Company Summary
    # Value: segment - No Aggregation
    # Widget type: behavior
    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12666(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: companyDetails
    # Widget: Company Summary
    # Value: vertical - No Aggregation
    # Widget type: behavior
    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12667(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: companyDetails
    # Widget: Company Summary
    # Value: quarterResults - Total Count
    # Widget type: behavior
    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12671(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: companyDetails
    # Widget: Company Summary
    # Value: companyMarginGroup - No Aggregation
    # Widget type: behavior
    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12690(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: cohortDetails
    # Widget: Cohort Details
    # Value: cohort - No Aggregation
    # Widget type: behavior
    entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_10318(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: cohortDetails
    # Widget: Cohort Details
    # Value: company - Total Count
    # Widget type: behavior
    entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12377(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: cohortDetails
    # Widget: Cohort Details
    # Value: segment - No Aggregation
    # Widget type: behavior
    entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12666(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: cohortDetails
    # Widget: Cohort Details
    # Value: vertical - No Aggregation
    # Widget type: behavior
    entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12667(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: My Cohorts
    # Widget: Cohort Table
    # Thing: Cohort
    # Attributes: cohort, segment, vertical, growthRate, companyMarginGroup, geography
    # Widget type: goal
    object_listing_02f46900_bac0_443f_96af_1a2d9728c6ef(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Company Details
    # Widget: Quarter Results
    # Thing: QuarterResults
    # Attributes: quarterResults, revenue, ebidta, budgetRevenue, bugdetEbidta, actualEbitdaMargins, actualVariableMargin, ruleOf40Actual
    # Widget type: goal
    object_listing_1fc75be7_6b3d_435b_bbe6_84fdba3a81e0(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Company Table
    # Thing: company
    # Attributes: Company, Cohort, Vertical, Segment, GrowthProfile, CompanyMarginGroup, Geography
    object_listing_72ce3ef5_fe85_4909_81a8_5c13d43a4861(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Cohort Configuration
    # Thing: cohortName
    # Attributes: CohortName, CohortUrl
    object_listing_c44a3d3e_9e91_45dd_a417_c00196cb7ce9(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Cohort Details
    # Widget: Results
    # Thing: QuarterResults
    # Attributes: quarterResults, revenue, ebidta, growthRevenue, growthEbitda, ruleOf40Budgeted
    # Widget type: goal
    object_listing_cb81accf_1a8d_41da_b43b_7d05ef7bcbf1(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Cohort
    # Thing: cohort
    # Attributes: Cohort, CompanyMarginGroup, Segment, Vertical, GrowthRate, Geography
    object_listing_ce0afbb0_1a5a_4638_be12_bd568222d718(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Metric Configuration
    # Thing: quarterResults
    # Attributes: QuarterResults, Company, Revenue, RevenueVsBudget, BudgetRevenue, Ebidta, BudgetedEbitdaMargins, EbitdaVsBudget, ActualEbitdaMargins, EbitdaGrowthBudgeted, GrowthRevenue, GrowthEbitda, GrowthRevBudgeted, BugdetEbidta, BudgetedVariableMargin, ActualVariableMargin, RuleOf40Actual, RuleOf40Budgeted
    object_listing_d433bb05_0386_408c_a681_b76e78eb5d1c(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Company Details
    # Widget: Quarter Budget
    # Thing: QuarterResults
    # Attributes: quarterResults, budgetRevenue, bugdetEbidta, budgetedEbitdaMargins, ruleOf40Budgeted, budgetedVariableMargin
    # Widget type: goal
    object_listing_db882a7a_6fb3_4377_aaf2_9f926457be19(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Company Configuration
    # Thing: company
    # Attributes: Company, Geography, Margin, Segment, Vertical, GrowthProfile, CompanyMarginGroup, SizeProfile, GrowthRate
    object_listing_e035d974_ceb1_4b78_b483_1526fc7187a0(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Ebitda Trend
    # Value: ebidta - Average
    # Group by: timestamp - No Aggregation
    widget_84c7df71_6670_46cb_9571_102ce589cc47(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Companies by Revenue
    # Value: revenue - Sum
    # Group by: company - No Aggregation
    widget_cec2fdd3_eee6_49bf_9423_c85c37b34b5d(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Cohort by Revenue
    # Value: revenue - Sum
    # Group by: cohort - No Aggregation
    widget_e2e6324e_47d9_4658_b744_dd4aa56c2e4a(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Ebitda Trend
    # Value: ebidta - Average
    # Group by: timestamp - No Aggregation
    widget_f1413f4b_1551_4cc0_ac74_5fd88373637d(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Revenue Summary
    # Value: revenue - No Aggregation
    # Group by: quarterResults - No Aggregation
    widget_fa17ccc1_f59f_4f6b_9fa7_801c6b475e0c(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Rule of 40 Summary
    # Value: ruleOf40Actual
    widget_statistics309e55b8_0428_4447_992e_6a98401cc78d(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Growth Rate
    # Value: growthRate
    widget_statistics79ad9192_7f6f_419a_897d_8f302e967aa7(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Avg Growth Rate
    # Value: growthRate
    widget_statistics8efa4f02_18af_47d8_bb9f_a0c9f2c5f22d(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Cohort Company Count
    # Value: company
    widget_statisticsc706c9e0_3cf2_4720_af66_908b9f4682f1(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Margin
    # Value: margin
    widget_statisticsebd972e9_3a95_4cd0_920a_55430c90c91e(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Filter Bar
    # View: myCohorts
    # Widget: Filter 1
    # Widget type: behavior
    workflow_filters_8951a458_00b4_4666_b8ba_d0f4badb6244: WorkflowFiltersResult

    # Filter Bar
    # View: myPortfolio
    # Widget: Filter 1
    # Widget type: behavior
    workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd: WorkflowFiltersResult
    }
  `;
