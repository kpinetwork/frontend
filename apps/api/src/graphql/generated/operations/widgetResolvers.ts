/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { DataListingArgs, DataAggregationArgs, MultiTransFormationArgs } from '../../../types';
import { IResolvers } from 'apollo-server-express';

export const widgetResolvers: IResolvers = {
  Query: {
    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12664: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12664(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12664(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12666: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12666(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12666(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12667: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12667(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12667(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12671: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12671(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12671(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12690: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12690(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12690(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_10318: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_10318(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_10318(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12377: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12377(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12377(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12666: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12666(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12666(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12667: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12667(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12667(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_02f46900_bac0_443f_96af_1a2d9728c6ef: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_02f46900_bac0_443f_96af_1a2d9728c6ef(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_02f46900_bac0_443f_96af_1a2d9728c6ef(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_1fc75be7_6b3d_435b_bbe6_84fdba3a81e0: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_1fc75be7_6b3d_435b_bbe6_84fdba3a81e0(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_1fc75be7_6b3d_435b_bbe6_84fdba3a81e0(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_72ce3ef5_fe85_4909_81a8_5c13d43a4861: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_72ce3ef5_fe85_4909_81a8_5c13d43a4861(
        args.input,
      );
      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_72ce3ef5_fe85_4909_81a8_5c13d43a4861(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_c44a3d3e_9e91_45dd_a417_c00196cb7ce9: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_c44a3d3e_9e91_45dd_a417_c00196cb7ce9(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_c44a3d3e_9e91_45dd_a417_c00196cb7ce9(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_cb81accf_1a8d_41da_b43b_7d05ef7bcbf1: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_cb81accf_1a8d_41da_b43b_7d05ef7bcbf1(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_cb81accf_1a8d_41da_b43b_7d05ef7bcbf1(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_ce0afbb0_1a5a_4638_be12_bd568222d718: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_ce0afbb0_1a5a_4638_be12_bd568222d718(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_ce0afbb0_1a5a_4638_be12_bd568222d718(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_d433bb05_0386_408c_a681_b76e78eb5d1c: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_d433bb05_0386_408c_a681_b76e78eb5d1c(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_d433bb05_0386_408c_a681_b76e78eb5d1c(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_db882a7a_6fb3_4377_aaf2_9f926457be19: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_db882a7a_6fb3_4377_aaf2_9f926457be19(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_db882a7a_6fb3_4377_aaf2_9f926457be19(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_e035d974_ceb1_4b78_b483_1526fc7187a0: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_e035d974_ceb1_4b78_b483_1526fc7187a0(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_e035d974_ceb1_4b78_b483_1526fc7187a0(args.input, {
            ...rest,
          })
        : result;
    },

    widget_84c7df71_6670_46cb_9571_102ce589cc47: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_84c7df71_6670_46cb_9571_102ce589cc47(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_84c7df71_6670_46cb_9571_102ce589cc47(args.input, { ...rest })
        : result;
    },

    widget_cec2fdd3_eee6_49bf_9423_c85c37b34b5d: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_cec2fdd3_eee6_49bf_9423_c85c37b34b5d(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_cec2fdd3_eee6_49bf_9423_c85c37b34b5d(args.input, { ...rest })
        : result;
    },

    widget_e2e6324e_47d9_4658_b744_dd4aa56c2e4a: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_e2e6324e_47d9_4658_b744_dd4aa56c2e4a(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_e2e6324e_47d9_4658_b744_dd4aa56c2e4a(args.input, { ...rest })
        : result;
    },

    widget_f1413f4b_1551_4cc0_ac74_5fd88373637d: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_f1413f4b_1551_4cc0_ac74_5fd88373637d(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_f1413f4b_1551_4cc0_ac74_5fd88373637d(args.input, { ...rest })
        : result;
    },

    widget_fa17ccc1_f59f_4f6b_9fa7_801c6b475e0c: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_fa17ccc1_f59f_4f6b_9fa7_801c6b475e0c(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_fa17ccc1_f59f_4f6b_9fa7_801c6b475e0c(args.input, { ...rest })
        : result;
    },

    widget_statistics309e55b8_0428_4447_992e_6a98401cc78d: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics309e55b8_0428_4447_992e_6a98401cc78d(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics309e55b8_0428_4447_992e_6a98401cc78d(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics79ad9192_7f6f_419a_897d_8f302e967aa7: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics79ad9192_7f6f_419a_897d_8f302e967aa7(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics79ad9192_7f6f_419a_897d_8f302e967aa7(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics8efa4f02_18af_47d8_bb9f_a0c9f2c5f22d: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics8efa4f02_18af_47d8_bb9f_a0c9f2c5f22d(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics8efa4f02_18af_47d8_bb9f_a0c9f2c5f22d(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsc706c9e0_3cf2_4720_af66_908b9f4682f1: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsc706c9e0_3cf2_4720_af66_908b9f4682f1(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsc706c9e0_3cf2_4720_af66_908b9f4682f1(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsebd972e9_3a95_4cd0_920a_55430c90c91e: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsebd972e9_3a95_4cd0_920a_55430c90c91e(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsebd972e9_3a95_4cd0_920a_55430c90c91e(args.input, {
            ...rest,
          })
        : result;
    },

    workflow_filters_8951a458_00b4_4666_b8ba_d0f4badb6244: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_8951a458_00b4_4666_b8ba_d0f4badb6244();

      return result;
    },

    workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd();

      return result;
    },
  },
};
