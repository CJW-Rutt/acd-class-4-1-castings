import Image from 'next/image'
import Values from '@/components/Values'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Values
        name="John"
        country="Canada"
        arr={[1, 2, 3]}
      />
    </main>
  )
}
