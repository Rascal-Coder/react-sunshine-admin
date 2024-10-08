import { AreaModel, AreaParams } from '@/api/demo/model/areaModel';
import { defHttp } from '@/utils/http';

enum Api {
  AREA_RECORD = '/cascader/getAreaRecord',
}

export const areaRecord = (data: AreaParams) =>
  defHttp.post<AreaModel[]>({ url: Api.AREA_RECORD, data });
