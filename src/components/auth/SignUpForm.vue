<template>
  <Form class="form-group" @submit="signUp" :validation-schema="schema">

    <div class="mb-3">
      <label for="firstName">First name</label>
      <Field name="firstName" autocomplete="given-name" type="text" class="form-control" v-model="firstName" />
      <ErrorMessage name="firstName" class="text-danger" />
    </div>

    <div class="mb-3">
      <label for="lastName">Last name</label>
      <Field name="lastName" autocomplete="family-name" type="text" class="form-control" v-model="lastName" />
      <ErrorMessage name="lastName" class="text-danger" />
    </div>

    <div class="mb-3">
      <label for="email">Email</label>
      <Field name="email" autocomplete="email" type="email" class="form-control" v-model="email" />

      <ErrorMessage name="email" class="text-danger" />
    </div>

    <div class="mb-3">
      <label for="password">Password</label>
      <Field name="password" autocomplete="new-password" type="password" class="form-control" v-model="password" />

      <ErrorMessage name="password" class="text-danger" />
    </div>

    <div class="mb-3">
      <label for="passwordRepeat">Password repeat</label>
      <Field name="passwordRepeat" autocomplete="off" type="password" class="form-control" v-model="passwordRepeat" />

      <ErrorMessage name="passwordRepeat" class="text-danger" />
    </div>

    <!-- <div class="form-group">
      <app-toggle v-model="disclaimerAccepted">Accept Disclaimer</app-toggle>
      <ErrorMessage name="disclaimerAccepted" class="text-danger" />
    </div> -->

    <div ngIf="form.errors?.['passwordMatch']">
      Attention: Passwords do not match!
    </div>

    <pre>Form valid: form.valid | json </pre>
    <pre>form.value | json</pre>

    <button class="btn btn-primary" type="submit">Sign up</button>

    <div class="text-center py-3">
      <router-link to="/">Go to the login</router-link>
    </div>

  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
import { object, string } from 'yup'

// function checkEmailAvailability(value) {
//   console.log('checkEmailAvailability', value)
// }

export default {

  components: {
    Field,
    Form,
    ErrorMessage,
  },

  setup() {
    const schema = object({
      firstName: string().required(),
      lastName: string().required(),
      email: string().email().required().test({
        name: 'availability',
        message: "The email ${value} is not available",
        test: value => {console.log('Check value', value); return true; }})
        ,
      password: string().min(8),
      passwordRepeat: string().required(),
      // TODO activate once app-toggle is available
      //disclaimerAccepted: boolean().required(),
    })

    return {
      schema,
    }
  },

  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordRepeat: '',
      disclaimerAccepted: true,
    }
  },

  methods: {

    signUp() {
      alert('Submitting')
    },
  }
}
</script>

<style lang="scss" scoped>

</style>