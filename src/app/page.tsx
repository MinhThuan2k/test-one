import { FormSearch } from '@/components/home/FormSearch'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-r from-[#e9f2f3] to-[#c7f7e3]">
      <main className="container max-w-7xl w-full flex flex-col items-center justify-center gap-[32px] row-start-2 sm:items-start">
        <div className="w-full flex flex-col items-center justify-center gap-[32px] row-start-2 space-y-4 space-x-5">
          <h2 className="text-xl font-semibold">Chọn quốc tịch & điểm đến</h2>
          <FormSearch />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
