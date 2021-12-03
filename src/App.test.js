import App from './App'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => shallow(<App />)
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'increment-button')
  expect(appComponent.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'counter-display')
  expect(appComponent.length).toBe(1)
})

test('counter starts at 0', () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('0')
})

test('clicking button incremements counter display', () => {
  const wrapper = setup()

  //find the button
  const button = findByTestAttr(wrapper, 'increment-button')

  //click the button
  button.simulate('click')

  //Find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, 'count').text()

  expect(count).toBe('1')
})

test('clicking decrement button decrements counter display', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'decrement-button')
  button.simulate('click')
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('0')
})
