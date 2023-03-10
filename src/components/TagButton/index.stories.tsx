import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TagButton from '.';

export default {
    title: 'TagButton',
    component: TagButton,
} as ComponentMeta<typeof TagButton>;

const Template: ComponentStory<typeof TagButton> = (args: any) => (
    <div style={{ maxWidth: '300px', padding: '20px' }}>
        <TagButton {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    children: 'Homme',
};
