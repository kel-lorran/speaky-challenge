import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomButton from '.';

export default {
    title: 'CustomButton',
    component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args: any) => (
    <div style={{ maxWidth: '300px', padding: '20px', background: '#F1F1F1' }}>
        <CustomButton {...args} />
    </div>
);

export const Outline = Template.bind({});
Outline.args = {
    children: 'Filtres',
    outline: true,
    secondaryColor: 'transparent'
};

export const Solid = Template.bind({});
Solid.args = {
    children: 'Filtres',
};
