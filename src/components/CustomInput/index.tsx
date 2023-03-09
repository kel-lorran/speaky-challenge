export interface CustomInputProps extends React.HTMLProps<HTMLInputElement> { }

const CustomInput = (props: CustomInputProps) =>
    <input {...props} />

export default CustomInput