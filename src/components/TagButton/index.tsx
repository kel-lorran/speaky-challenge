import { GrClose } from 'react-icons/gr';

import CustomButton, { CustomButtonProps } from "components/CustomButton";

const TagButton = ({ children, ...restProps }: CustomButtonProps) =>
    <CustomButton {...restProps} primaryColor="#ececec" secondaryColor="#484848" >
        <span style={{ textTransform: 'uppercase', marginRight: '0.5em' }}>{children}</span><GrClose />
    </CustomButton>

export default TagButton