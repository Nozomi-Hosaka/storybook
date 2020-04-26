import {storiesOf} from '@storybook/vue';

// storybook components
import AtomButton from './components/atoms/AtomButton';
import ListPage from "./pages/ListPage";

storiesOf('Button', module)
  .add('default', () => ({
    components: {AtomButton},
    template: '<AtomButton color="default"/>'
  }))
  .add('secondary', () => ({
    components: {AtomButton},
    template: '<AtomButton color="secondary"/>'
  }))
  .add('primary', () => ({
    components: {AtomButton},
    template: '<AtomButton color="primary"/>'
  }))
  .add('warning', () => ({
    components: {AtomButton},
    template: '<AtomButton color="warning"/>'
  }))
  .add('danger', () => ({
    components: {AtomButton},
    template: '<AtomButton color="danger"/>'
  }))
  .add('info', () => ({
    components: {AtomButton},
    template: '<AtomButton color="info"/>'
  }))
  .add('light', () => ({
    components: {AtomButton},
    template: '<AtomButton color="light"/>'
  }))
  .add('dark', () => ({
    components: {AtomButton},
    template: '<AtomButton color="dark"/>'
  }));

storiesOf('List', module)
  .add('default', () => ({
    components: {ListPage},
    template: '<ListPage></ListPage>'
  }));
