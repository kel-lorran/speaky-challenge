import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PersonCard from '.';

export default {
  title: 'PersonCard',
  component: PersonCard,
} as ComponentMeta<typeof PersonCard>;

const Template: ComponentStory<typeof PersonCard> = (args: any) => (
  <div style={{ maxWidth: '500px', padding: '20px', background: '#F1F1F1' }}>
    <PersonCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  person: {
    "id": 0,
    "imgUrl": "",
    "firstName": "Ehsanullah",
    "lastName": "Norton",
    "age": 25,
    "nationality": "BR",
    "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et nisl felis. Fusce mollis odio convallis elit ultrices fermentum. Pellentesque laoreet fermentum nisl quis efficitur. Curabitur laoreet imperdiet sem, sit amet convallis risus ullamcorper sit amet. Morbi scelerisque maximus iaculis. Phasellus sit amet scelerisque magna, ut porta mauris. Integer ut nisi quis libero faucibus porttitor. Aenean risus turpis, efficitur in feugiat eget, ullamcor",
    "parle": [
      "PT",
      "EN"
    ],
    "apprend": [
      "FR",
      "ES"
    ],
    "gender": "M"
  }
};
