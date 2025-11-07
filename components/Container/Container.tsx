import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const containerVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "bg-background",
        muted: "bg-muted",
        card: "bg-card",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  children: React.ReactNode;
}

const Container = ({ children, className, variant, ...props }: ContainerProps) => {
  return (
    <div className={cn(containerVariants({ variant, className }))} {...props}>
      <div className="mx-auto max-w-7xl p-4 sm:p-6 md:p-10 mt-10">
        {children}
      </div>
    </div>
  )
}

export default Container
