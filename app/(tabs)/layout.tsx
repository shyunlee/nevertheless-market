import TabBar from "@/components/TabBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='relative w-full flex flex-col h-lvh justify-between'>
      {children}
      <TabBar />
    </section>
  )
};