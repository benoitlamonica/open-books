<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import LoadingText from '../routes/budgets/_components/LoadingText.svelte';
</script>

<Meta title="Text" component={LoadingText} argTypes={{}} />

<Story name="Loading Text Component">
  <LoadingText test="ksdjldskj" />
</Story>
