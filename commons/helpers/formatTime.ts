import dayjs from 'dayjs'

export default (value: number) => {
    return dayjs(value).format('hh:mm')
}
