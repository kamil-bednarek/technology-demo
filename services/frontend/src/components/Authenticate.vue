<template>
    <v-container>
        <form>
            <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    :counter="10"
                    label="Name"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
            ></v-text-field>

            <v-checkbox
                    v-model="checkbox"
                    :error-messages="checkboxErrors"
                    label="This is not real app. Do you accept that?"
                    required
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
            ></v-checkbox>

            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </form>
    </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'Authenticate',
    mixins: [validationMixin],
    validations: {
        name: { required, maxLength: maxLength(10) },
        email: { required, email },
        checkbox: {
            checked (val) {
                return val
            }
        }
    },
    data: () => ({
        name: '',
        email: '',
        checkbox: false
    }),
    computed: {
        checkboxErrors () {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
        },
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        }
    },
    methods: {
        submit () {
            this.$v.$touch()
        },
        clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.checkbox = false
        }
    }
}
</script>

<style scoped lang="scss">
</style>
