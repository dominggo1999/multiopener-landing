import React from 'react';
import {
  FeaturesWrapper,
  FeatureItem,
  FeatureTextContent,
  FeatureTitle,
  FeatureDescription,
} from './Features.style';
import DemoVideo from '~/common/DemoVideo/DemoVideo';

const Features = () => {
  return (
    <FeaturesWrapper as="section">
      <FeatureItem>
        <FeatureTextContent>
          <FeatureTitle>Search multiple websites with the same search term.</FeatureTitle>
          <FeatureDescription>
            Vestibulum ullamcorper mattis dolor ac mattis. Ut ut lacus risus. Donec aliquam placerat porttitor. Aenean sagittis finibus massa, eget euismod augue ornare aliquam. Vestibulum efficitur nunc eu feugiat aliquet. In ultrices leo id elit pretium, eget facilisis dolor gravida.
          </FeatureDescription>
        </FeatureTextContent>
        <DemoVideo />
      </FeatureItem>
      <FeatureItem>
        <FeatureTextContent>
          <FeatureTitle>Select text using mouse and search it on multiple websites.</FeatureTitle>
          <FeatureDescription>
            Nunc placerat aliquam purus, ut vehicula purus vehicula vitae. Sed dapibus nisl vitae dolor lobortis scelerisque. Quisque nisi tellus, ultrices ac arcu eu, tincidunt eleifend erat. Proin luctus, ligula sed faucibus lacinia, est urna eleifend nibh, nec commodo arcu libero at ante.
          </FeatureDescription>
        </FeatureTextContent>
        <DemoVideo />
      </FeatureItem>
      <FeatureItem>
        <FeatureTextContent>
          <FeatureTitle>18 color schemes and dark theme support.</FeatureTitle>
          <FeatureDescription>
            Aliquam cursus sapien quis justo porttitor sollicitudin. Maecenas vitae magna sed mi vestibulum semper et ac quam. Fusce et urna orci. Pellentesque vel elit ex. Nullam quam dui, sollicitudin sed convallis sed, condimentum et lectus. Sed laoreet justo libero, in suscipit purus efficitur in.
          </FeatureDescription>
        </FeatureTextContent>
        <DemoVideo />
      </FeatureItem>
      <FeatureItem>
        <FeatureTextContent>
          <FeatureTitle>Every single change in settings will be directly applied without needing a page reload.</FeatureTitle>
          <FeatureDescription>
            Sed iaculis, est eu eleifend luctus, leo orci convallis magna, sit amet congue nisl massa eu mauris. Donec pharetra imperdiet quam, eu molestie leo facilisis eu. Nam tempor venenatis odio, ac aliquet tellus semper vitae.
          </FeatureDescription>
        </FeatureTextContent>
        <DemoVideo />
      </FeatureItem>
    </FeaturesWrapper>
  );
};

export default Features;
