export interface CustomButtonProps extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> {
    children: React.ReactNode;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) =>
    <button {...props}>{children}</button>

export default CustomButton