<template>
  <v-card elevation="5">
    <dialog-confirmation
      @cancel="cancelConfirmation"
      :isOpen="isConfirmation"
      @confirm="deleteItem"
    />
    <v-dialog v-model="isAddReturn" width="1000" persistent>
      <v-form
        v-model="isValid"
        ref="form"
        lazy-validation
        @submit.prevent="submitHandler"
      >
        <v-card class="pa-10">
          <div>
            <v-row>
              <v-col>
                Time From
                <v-text-field
                  outlined
                  :rules="standardRules"
                  v-model="entry.timefrom"
                ></v-text-field>
              </v-col>
              <v-col>
                Time To
                <v-text-field
                  outlined
                  :rules="standardRules"
                  v-model="entry.timeto"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div>
            <v-row>
              <v-col>
                Location
                <v-select
                  :items="trip_selection"
                  outlined
                  v-model="entry.location"
                ></v-select>
              </v-col>
              <v-col>
                Price
                <v-text-field
                  outlined
                  :rules="standardRules"
                  v-model="entry.price"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                Package Name
                <v-text-field
                  outlined
                  :rules="standardRules"
                  v-model="entry.package_name"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div class="px-10 pointer" align="center">
            <v-btn width="200" dark depressed color="grey" @click="cancelForm">
              Cancel
            </v-btn>
            <v-btn
              width="200"
              :loading="isLoading"
              dark
              depressed
              color="secondary"
              type="submit"
            >
              Submit
            </v-btn>
          </div>
        </v-card>
      </v-form>
    </v-dialog>
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Return Management</b>
      </v-col>
      <v-spacer></v-spacer>
      <v-col align-self="center" align="end" class="pr-10">
        <v-btn
          class="rnd-btn"
          rounded
          large
          color="secondary"
          depressed
          dark
          width="170"
          @click="openForm"
        >
          <span class="text-none">Add Return</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table
      class="pa-5"
      :headers="headers"
      :items="query_set"
      :loading="isLoading"
    >
      <template v-slot:loading>
        <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
      </template>
      <template #[`item.opt`]="{ item }">
        <v-menu offset-y z-index="1">
          <template v-slot:activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item @click.stop="editForm(item)">
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="selectItemToDelete(item.id)">
              <v-list-item-content>
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import validations from "@/utils/validations";
import { mapState, mapActions } from "vuex";
import DialogConfirmation from "../../general/Dialog/DialogConfirmation.vue";
var cloneDeep = require("lodash.clonedeep");
export default {
  computed: {
    ...mapState("return", ["query_set"]),
  },
  components: {
    DialogConfirmation,
  },
  created() {
    this.isLoading = true;
    this.loadItem();
    this.isLoading = false;
  },
  data() {
    return {
      trip_selection: [
      "Dapa",
       "Surigao",
       "San Jose - Dinagat",
      ],
      ...validations,
      isValid: false,
      isConfirmation: false,
      isAddReturn: false,
      buttonLoad: false,
      isAddForm: false,
      isLoading: false,
      isDelete: false,
      selectedItem: {},
      isLoaded: false,
      selectedId: "",
      entry: {
        timefrom: "",
        timeto: "",
        location: "",
        package_name: "",
      },
      headers: [
        { text: "ID", value: "id" },
        { text: "Time From", value: "timefrom" },
        { text: "Time To", value: "timeto" },
        { text: "Package Name", value: "package_name" },
        { text: "Price", value: "price" },
        { text: "Location", value: "location" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
  methods: {
    cancelForm() {
      this.$refs.form.reset();
      this.isAddReturn = false;
    },
    selectItemToDelete(id) {
      this.selectedId = id;
      this.isConfirmation = true;
    },
    cancelConfirmation() {
      this.isConfirmation = false;
    },
    async deleteItem() {
      try {
        await this.$store.dispatch("return/deleteReturn", this.selectedId);
        this.loadItem();
        this.isConfirmation = false;
        alert("Successfully Deleted");
      } catch (error) {
        alert(error);
        this.isLoading = false;
      }
    },
    async loadItem() {
      await this.$store.dispatch("return/viewReturn", {});
    },
    cancel() {},
    async openForm() {
      this.isAddForm = true;
      this.isAddReturn = true;
    },
    async editForm(item) {
      this.entry = cloneDeep(item);
      this.isAddForm = false;
      this.isAddReturn = true;
    },

    async submitHandler() {
      this.isLoading = true;
      var isValidated = false;
      isValidated = this.$refs.form.validate();
      if (!isValidated) return;
      try {
        if (this.isAddForm)
          await this.$store.dispatch("return/addReturn", this.entry);
        else await this.$store.dispatch("return/editReturn", this.entry);
        this.$refs.form.reset();
        this.loadItem();
        this.isAddReturn = false;
        this.isLoading = false;
        alert("Successfully Confirmed!");
      } catch (error) {
        alert(error);
        this.isLoading = false;
        this.$refs.form.reset();
      }
    },
  },
};
</script>

<style>
</style>