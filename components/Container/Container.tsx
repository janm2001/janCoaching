
interface ContainerProps {
  children: React.ReactNode;
}   
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="p-4 sm:p-6 md:p-10">
      {children}
    </div>
  )
}

export default Container
