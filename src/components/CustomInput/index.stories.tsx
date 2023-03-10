import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomInput from '.';

export default {
    title: 'CustomInput',
    component: CustomInput,
} as ComponentMeta<typeof CustomInput>;

const Template: ComponentStory<typeof CustomInput> = (args: any) => (
    <div style={{ maxWidth: '300px', padding: '20px' }}>
        <CustomInput {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Chercher'
};
