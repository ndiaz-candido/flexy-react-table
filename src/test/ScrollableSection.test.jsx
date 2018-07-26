import React from 'react';
import { shallow, mount } from 'enzyme';
import ScrollableSection from '../components/ScrollSyncRows/ScrollSyncRow/Sections/ScrollableSection';
import ScrollSyncColumn from '../components/ScrollSyncColumns/ScrollSyncColumn';

describe('ScrollableSection', () => {
  const columns = [
    <ScrollSyncColumn key="a" name="a">
      Column A
    </ScrollSyncColumn>,
    <ScrollSyncColumn key="b" name="b">
      Column B
    </ScrollSyncColumn>,
  ];

  test('should render its default content', () => {
    const ScrollableSectionComponent = shallow(
      <ScrollableSection columns={[]} />
    );

    expect(ScrollableSectionComponent).toMatchSnapshot();
  });

  test('should render the given columns', () => {
    const ScrollableSectionComponent = shallow(
      <ScrollableSection columns={columns} />
    );

    expect(ScrollableSectionComponent).toMatchSnapshot();
  });

  test('should call the callback when the section is scrolled', () => {
    const onScroll = jest.fn();
    const ScrollableSectionComponent = mount(
      <ScrollableSection columns={columns} onScroll={onScroll} />
    );
    const ScrollBars = ScrollableSectionComponent.find('Scrollbars');

    ScrollBars.prop('onScroll')();

    expect(onScroll).toHaveBeenCalled();
  });
});
