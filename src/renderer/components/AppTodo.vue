<template>
    <div>
        <app-header :header="this.header"></app-header>
        <v-container class="todo">

            <v-layout row class="todo-filter">
                <v-btn flat block large color="blue">
                    <v-icon>history</v-icon>
                </v-btn>
                <v-btn flat block large color="blue">
                    <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn flat block large color="blue">
                    <v-icon>place</v-icon>
                </v-btn>
            </v-layout>

            <v-layout row column>
                <v-form valid class="todo-form">

                    <v-text-field color="blue"
                                  label="Todo text..."
                                  name="todo-text"
                                  :counter="29"></v-text-field>

                    <v-btn outline
                           color="blue"
                           class="todo-send">Send</v-btn>

                </v-form>
            </v-layout>

            <div class="todo-list">
                <v-layout row class="todo-list__items">
                    <v-flex xs1>
                        <v-checkbox color="blue" v-model="checkbox"></v-checkbox>
                    </v-flex>

                    <v-flex xs8>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam, autem blanditiis consequatur corporis cumque doloremque doloribus excepturi iure laborum molestiae, nobis, perspiciatis placeat quas quasi quod rem tempora voluptates!</p>
                    </v-flex>

                    <v-flex xs3>
                        <v-btn flat color="blue"></v-btn>
                        <v-btn flat color="blue"></v-btn>
                    </v-flex>
                </v-layout>
            </div>

        </v-container>
    </div>
</template>

<script>
	import AppHeader from './AppHeader'

	export default {
		components: {AppHeader},
		name: "app-todo",
		data() {
			return {
				header: "Todo",
                checkbox: false
			}
		}
	}
</script>

<style lang="stylus" scoped>
    .todo-form
        display flex

    .todo-send
        margin-top 13px
</style>