import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomInputRadio from '.';

export default {
    title: 'CustomInputRadio',
    component: CustomInputRadio,
} as ComponentMeta<typeof CustomInputRadio>;

const Template: ComponentStory<typeof CustomInputRadio> = (args: any) => (
    <div style={{ maxWidth: '300px', padding: '20px' }}>
        <CustomInputRadio {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    name: 'radio-example',
    options: [
        {
            text: 'Homme',
            checked: true,
        },
        {
            text: 'Femme',
            checked: false,
        },
        {
            text: 'Autre',
            checked: false,
        }
    ]
};
