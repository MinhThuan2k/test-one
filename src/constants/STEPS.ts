import { StepKey } from '@/app/types/step-key'

export const STEPS: { key: StepKey; label: string }[] = [
  { key: 'HOME', label: 'Trang chủ' },
  { key: 'SELECT', label: 'Chọn quốc tịch & điểm đến' },
  { key: 'CHECK', label: 'Kiểm tra loại visa' },
  { key: 'FORM', label: 'Điền form visa' },
  { key: 'REVIEW', label: 'Review' },
  { key: 'PAYMENT', label: 'Thanh toán' },
  { key: 'CONFIRM', label: 'Xác nhận' }
]

export const NATIONALITIES = [
  {
    value: 'vietnam',
    label: 'Vietnam',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197473.png'
  },
  {
    value: 'united-states',
    label: 'United States',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197484.png'
  },
  {
    value: 'united-kingdom',
    label: 'United Kingdom',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197374.png'
  },
  {
    value: 'germany',
    label: 'Germany',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197571.png'
  },
  {
    value: 'france',
    label: 'France',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197560.png'
  },
  {
    value: 'china',
    label: 'China',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197375.png'
  }
]

export const COUNTRIES = [
  {
    value: 'vietnam',
    label: 'Vietnam',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197473.png'
  },
  {
    value: 'united-states',
    label: 'United States',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197484.png'
  },
  {
    value: 'united-kingdom',
    label: 'United Kingdom',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197374.png'
  },
  {
    value: 'germany',
    label: 'Germany',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197571.png'
  },
  {
    value: 'france',
    label: 'France',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197560.png'
  },
  {
    value: 'china',
    label: 'China',
    image: 'https://cdn-icons-png.flaticon.com/128/197/197375.png'
  }
]

export const months = [
  { value: '01', label: 'January' },
  { value: '02', label: 'February' },
  { value: '03', label: 'March' },
  { value: '04', label: 'April' },
  { value: '05', label: 'May' },
  { value: '06', label: 'June' },
  { value: '07', label: 'July' },
  { value: '08', label: 'August' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' }
]
