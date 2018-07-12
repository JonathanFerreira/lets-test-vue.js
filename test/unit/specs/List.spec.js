import { mount } from 'avoriaz'
import List from '@/components/List'

describe('List.vue', () => {
  it('displays items from the list with avoriaz', () => {
    // build component
    const ListComponent = mount(List)

    expect(ListComponent.text()).to.contain('play games')
  })

  it('add a new item to list on click with avoriaz', () => {
    // build component
    const ListComponent = mount(List)

    // set value of new item
    ListComponent.setData({
      newItem: 'brush my teeth'
    })

    // simulate click event
    const button = ListComponent.find('button')[0]
    button.trigger('click')

    expect(ListComponent.text()).to.contain('brush my teeth')
    expect(ListComponent.data().listItems).to.contain('brush my teeth')
  })
})
