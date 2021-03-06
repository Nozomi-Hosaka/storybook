import {storiesOf} from '@storybook/vue';

// storybook components
import AtomButton from './components/atoms/AtomButton';
import RadioPage from './pages/RadioPage';
import ListPage from './pages/ListPage';
import StepperPage from './pages/StepperPage';
import NavDrawerPage from './pages/NavDrawerPage';
import NavigatorPage from './pages/NavigatorPage';
import InputPage from './pages/InputPage';
import PanelPage from './pages/PanelPage';
import CheckBoxPage from './pages/CheckBoxPage';
import SelectPage from './pages/SelectPage';

storiesOf('Button', module)
  .add('default', () => ({
    components: {AtomButton},
    template: '<AtomButton color="default"/>'
  }))
  .add('outline', () => ({
    components: {AtomButton},
    template: '<AtomButton color="default" outline/>'
  }))
  .add('primary', () => ({
    components: {AtomButton},
    template: '<AtomButton primary/>'
  }))
  .add('primary-outline', () => ({
    components: {AtomButton},
    template: '<AtomButton outline primary/>'
  }))
  .add('warning', () => ({
    components: {AtomButton},
    template: '<AtomButton warning/>'
  }))
  .add('warning-outline', () => ({
    components: {AtomButton},
    template: '<AtomButton warning outline/>'
  }))
  .add('danger', () => ({
    components: {AtomButton},
    template: '<AtomButton danger/>'
  }))
  .add('danger-outline', () => ({
    components: {AtomButton},
    template: '<AtomButton danger outline/>'
  }))
  .add('block', () => ({
    components: {AtomButton},
    template: '<AtomButton block/>'
  }))
  .add('large', () => ({
    components: {AtomButton},
    template: '<AtomButton large/>'
  }))
  .add('large and block', () => ({
    components: {AtomButton},
    template: '<AtomButton large block/>'
  }));

storiesOf('Radios', module)
  .add('default', () => ({
    components: {RadioPage},
    template: '<RadioPage/>'
  }));

storiesOf('Inputs', module)
  .add('default', () => ({
    components: {InputPage},
    template: '<InputPage />'
  }));

storiesOf('CheckBoxes', module)
  .add('default', () => ({
    components: {CheckBoxPage},
    template: '<CheckBoxPage />'
  }));

storiesOf('Panel', module)
  .add('default', () => ({
    components: {PanelPage},
    template: '<PanelPage />'
  }));

storiesOf('List', module)
  .add('default', () => ({
    components: {ListPage},
    template: '<ListPage></ListPage>'
  }));

storiesOf('Stepper', module)
  .add('default', () => ({
    components: {StepperPage},
    template: '<stepper-page></stepper-page>'
  }));

storiesOf('NavDrawer', module)
  .add('default', () => ({
    components: {NavDrawerPage},
    template: '<nav-drawer-page></nav-drawer-page>'
  }));

storiesOf('Navigator', module)
  .add('default', () => ({
    components: {NavigatorPage},
    template: '<navigator-page></navigator-page>'
  }));

storiesOf('Selects', module)
  .add('default', () => ({
    components: {SelectPage},
    template: '<select-page></select-page>'
  }));