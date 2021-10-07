/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { RESTDataSource } from 'apollo-datasource-rest';
import { DataListingArgs, DataAggregationArgs, MultiTransFormationArgs, AuthContext } from '../../../types';
import { entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377 } from '../../custom/widgetResolvers/entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377';
import { entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12664 } from '../../custom/widgetResolvers/entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12664';
import { entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12666 } from '../../custom/widgetResolvers/entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12666';
import { entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12667 } from '../../custom/widgetResolvers/entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12667';
import { entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12671 } from '../../custom/widgetResolvers/entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12671';
import { entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12690 } from '../../custom/widgetResolvers/entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12690';
import { entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_10318 } from '../../custom/widgetResolvers/entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_10318';
import { entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12377 } from '../../custom/widgetResolvers/entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12377';
import { entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12666 } from '../../custom/widgetResolvers/entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12666';
import { entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12667 } from '../../custom/widgetResolvers/entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12667';
import { object_listing_02f46900_bac0_443f_96af_1a2d9728c6ef } from '../../custom/widgetResolvers/object_listing_02f46900_bac0_443f_96af_1a2d9728c6ef';
import { object_listing_1fc75be7_6b3d_435b_bbe6_84fdba3a81e0 } from '../../custom/widgetResolvers/object_listing_1fc75be7_6b3d_435b_bbe6_84fdba3a81e0';
import { object_listing_72ce3ef5_fe85_4909_81a8_5c13d43a4861 } from '../../custom/widgetResolvers/object_listing_72ce3ef5_fe85_4909_81a8_5c13d43a4861';
import { object_listing_c44a3d3e_9e91_45dd_a417_c00196cb7ce9 } from '../../custom/widgetResolvers/object_listing_c44a3d3e_9e91_45dd_a417_c00196cb7ce9';
import { object_listing_cb81accf_1a8d_41da_b43b_7d05ef7bcbf1 } from '../../custom/widgetResolvers/object_listing_cb81accf_1a8d_41da_b43b_7d05ef7bcbf1';
import { object_listing_ce0afbb0_1a5a_4638_be12_bd568222d718 } from '../../custom/widgetResolvers/object_listing_ce0afbb0_1a5a_4638_be12_bd568222d718';
import { object_listing_d433bb05_0386_408c_a681_b76e78eb5d1c } from '../../custom/widgetResolvers/object_listing_d433bb05_0386_408c_a681_b76e78eb5d1c';
import { object_listing_db882a7a_6fb3_4377_aaf2_9f926457be19 } from '../../custom/widgetResolvers/object_listing_db882a7a_6fb3_4377_aaf2_9f926457be19';
import { object_listing_e035d974_ceb1_4b78_b483_1526fc7187a0 } from '../../custom/widgetResolvers/object_listing_e035d974_ceb1_4b78_b483_1526fc7187a0';
import { widget_84c7df71_6670_46cb_9571_102ce589cc47 } from '../../custom/widgetResolvers/widget_84c7df71_6670_46cb_9571_102ce589cc47';
import { widget_cec2fdd3_eee6_49bf_9423_c85c37b34b5d } from '../../custom/widgetResolvers/widget_cec2fdd3_eee6_49bf_9423_c85c37b34b5d';
import { widget_e2e6324e_47d9_4658_b744_dd4aa56c2e4a } from '../../custom/widgetResolvers/widget_e2e6324e_47d9_4658_b744_dd4aa56c2e4a';
import { widget_f1413f4b_1551_4cc0_ac74_5fd88373637d } from '../../custom/widgetResolvers/widget_f1413f4b_1551_4cc0_ac74_5fd88373637d';
import { widget_fa17ccc1_f59f_4f6b_9fa7_801c6b475e0c } from '../../custom/widgetResolvers/widget_fa17ccc1_f59f_4f6b_9fa7_801c6b475e0c';
import { widget_statistics309e55b8_0428_4447_992e_6a98401cc78d } from '../../custom/widgetResolvers/widget_statistics309e55b8_0428_4447_992e_6a98401cc78d';
import { widget_statistics79ad9192_7f6f_419a_897d_8f302e967aa7 } from '../../custom/widgetResolvers/widget_statistics79ad9192_7f6f_419a_897d_8f302e967aa7';
import { widget_statistics8efa4f02_18af_47d8_bb9f_a0c9f2c5f22d } from '../../custom/widgetResolvers/widget_statistics8efa4f02_18af_47d8_bb9f_a0c9f2c5f22d';
import { widget_statisticsc706c9e0_3cf2_4720_af66_908b9f4682f1 } from '../../custom/widgetResolvers/widget_statisticsc706c9e0_3cf2_4720_af66_908b9f4682f1';
import { widget_statisticsebd972e9_3a95_4cd0_920a_55430c90c91e } from '../../custom/widgetResolvers/widget_statisticsebd972e9_3a95_4cd0_920a_55430c90c91e';
import { workflow_filters_8951a458_00b4_4666_b8ba_d0f4badb6244 } from '../../custom/widgetResolvers/workflow_filters_8951a458_00b4_4666_b8ba_d0f4badb6244';
import { workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd } from '../../custom/widgetResolvers/workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd';

// If you need to access the current user, the token and data sources,
// you can get them from 'this.context'
export class WidgetApi extends RESTDataSource {
  async entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377(args: DataListingArgs) {
    return entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12377(args, this.context);
  }

  async entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12664(args: DataListingArgs) {
    return entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12664(args, this.context);
  }

  async entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12666(args: DataListingArgs) {
    return entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12666(args, this.context);
  }

  async entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12667(args: DataListingArgs) {
    return entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12667(args, this.context);
  }

  async entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12671(args: DataListingArgs) {
    return entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12671(args, this.context);
  }

  async entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12690(args: DataListingArgs) {
    return entity_detail_1513e256_de96_4db7_84d6_06da3b48a4a9_12690(args, this.context);
  }

  async entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_10318(args: DataListingArgs) {
    return entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_10318(args, this.context);
  }

  async entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12377(args: DataListingArgs) {
    return entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12377(args, this.context);
  }

  async entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12666(args: DataListingArgs) {
    return entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12666(args, this.context);
  }

  async entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12667(args: DataListingArgs) {
    return entity_detail_7b931fac_c556_41b4_a3a2_dc99b14d8b2e_12667(args, this.context);
  }

  async object_listing_02f46900_bac0_443f_96af_1a2d9728c6ef(args: DataListingArgs) {
    return object_listing_02f46900_bac0_443f_96af_1a2d9728c6ef(args, this.context);
  }

  async object_listing_1fc75be7_6b3d_435b_bbe6_84fdba3a81e0(args: DataListingArgs) {
    return object_listing_1fc75be7_6b3d_435b_bbe6_84fdba3a81e0(args, this.context);
  }

  async object_listing_72ce3ef5_fe85_4909_81a8_5c13d43a4861(args: DataListingArgs) {
    return object_listing_72ce3ef5_fe85_4909_81a8_5c13d43a4861(args, this.context);
  }

  async object_listing_c44a3d3e_9e91_45dd_a417_c00196cb7ce9(args: DataListingArgs) {
    return object_listing_c44a3d3e_9e91_45dd_a417_c00196cb7ce9(args, this.context);
  }

  async object_listing_cb81accf_1a8d_41da_b43b_7d05ef7bcbf1(args: DataListingArgs) {
    return object_listing_cb81accf_1a8d_41da_b43b_7d05ef7bcbf1(args, this.context);
  }

  async object_listing_ce0afbb0_1a5a_4638_be12_bd568222d718(args: DataListingArgs) {
    return object_listing_ce0afbb0_1a5a_4638_be12_bd568222d718(args, this.context);
  }

  async object_listing_d433bb05_0386_408c_a681_b76e78eb5d1c(args: DataListingArgs) {
    return object_listing_d433bb05_0386_408c_a681_b76e78eb5d1c(args, this.context);
  }

  async object_listing_db882a7a_6fb3_4377_aaf2_9f926457be19(args: DataListingArgs) {
    return object_listing_db882a7a_6fb3_4377_aaf2_9f926457be19(args, this.context);
  }

  async object_listing_e035d974_ceb1_4b78_b483_1526fc7187a0(args: DataListingArgs) {
    return object_listing_e035d974_ceb1_4b78_b483_1526fc7187a0(args, this.context);
  }

  async widget_84c7df71_6670_46cb_9571_102ce589cc47(args: DataAggregationArgs) {
    return widget_84c7df71_6670_46cb_9571_102ce589cc47(args, this.context);
  }

  async widget_cec2fdd3_eee6_49bf_9423_c85c37b34b5d(args: DataAggregationArgs) {
    return widget_cec2fdd3_eee6_49bf_9423_c85c37b34b5d(args, this.context);
  }

  async widget_e2e6324e_47d9_4658_b744_dd4aa56c2e4a(args: DataAggregationArgs) {
    return widget_e2e6324e_47d9_4658_b744_dd4aa56c2e4a(args, this.context);
  }

  async widget_f1413f4b_1551_4cc0_ac74_5fd88373637d(args: DataAggregationArgs) {
    return widget_f1413f4b_1551_4cc0_ac74_5fd88373637d(args, this.context);
  }

  async widget_fa17ccc1_f59f_4f6b_9fa7_801c6b475e0c(args: DataAggregationArgs) {
    return widget_fa17ccc1_f59f_4f6b_9fa7_801c6b475e0c(args, this.context);
  }

  async widget_statistics309e55b8_0428_4447_992e_6a98401cc78d(args: MultiTransFormationArgs) {
    return widget_statistics309e55b8_0428_4447_992e_6a98401cc78d(args, this.context);
  }

  async widget_statistics79ad9192_7f6f_419a_897d_8f302e967aa7(args: MultiTransFormationArgs) {
    return widget_statistics79ad9192_7f6f_419a_897d_8f302e967aa7(args, this.context);
  }

  async widget_statistics8efa4f02_18af_47d8_bb9f_a0c9f2c5f22d(args: MultiTransFormationArgs) {
    return widget_statistics8efa4f02_18af_47d8_bb9f_a0c9f2c5f22d(args, this.context);
  }

  async widget_statisticsc706c9e0_3cf2_4720_af66_908b9f4682f1(args: MultiTransFormationArgs) {
    return widget_statisticsc706c9e0_3cf2_4720_af66_908b9f4682f1(args, this.context);
  }

  async widget_statisticsebd972e9_3a95_4cd0_920a_55430c90c91e(args: MultiTransFormationArgs) {
    return widget_statisticsebd972e9_3a95_4cd0_920a_55430c90c91e(args, this.context);
  }

  async workflow_filters_8951a458_00b4_4666_b8ba_d0f4badb6244(args: never) {
    return workflow_filters_8951a458_00b4_4666_b8ba_d0f4badb6244(args, this.context);
  }

  async workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd(args: never) {
    return workflow_filters_98aa94f8_585e_49dc_b3a5_56dd81c10afd(args, this.context);
  }
}
