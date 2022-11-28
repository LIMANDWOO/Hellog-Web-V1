import dayjs from "dayjs";

class DateTransform {
  public format(date: string): string {
    return dayjs(date).format("YYYY-MM-DD");
  }
}

export default new DateTransform();
