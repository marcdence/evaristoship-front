<template>
  <div>
    <v-img
      src="/images/hero-image.jpeg"
      color="transparent"
      height="85vh"
      class="d-flex justify-start align-center pl-16"
    >
      
      <v-row>
        <v-col>
          <v-card class="pa-5 rounded-xl" width="1000" height="" elevation="10">
            <v-row class="py-5">
              <v-col cols="12">
                <div class="text-h5 pb-5">
                  <b>Hi, Where would you like to go?</b>
                </div>
                <v-row>
                  <v-col>
                    From
                    <div class="text-h5">
                      <v-select
                        :items="trip_selection"
                        outlined
                        v-model="book.from"
                      ></v-select>
                    </div>
                  </v-col>
                  <v-col>
                    <div>To</div>
                    <div class="text-h5">
                      <v-select
                        :items="trip_selection"
                        outlined
                        v-model="book.to"
                      ></v-select>
                    </div>
                  </v-col>
                  <v-col>
                    Depart
                    <div class="text-h5">
                      <v-menu
                        ref="departMenu"
                        v-model="departMenu"
                        :close-on-content-click="false"
                        :return-value.sync="book.depart"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="book.depart"
                            outlined
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="book.depart"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            color="primary"
                            @click="departMenu = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.departMenu.save(book.depart)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </div>
                  </v-col>
                  <v-col>
                    Return
                    <div class="text-h5">
                      <v-menu
                        ref="returnMenu"
                        v-model="returnMenu"
                        :close-on-content-click="false"
                        :return-value.sync="book.return"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="book.return"
                            outlined
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="book.return"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            color="primary"
                            @click="returnMenu = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.returnMenu.save(book.return)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <v-col>
                    Ticket Type
                    <div class="text-h5">
                      <v-select
                        :items="['Round Trip', 'One Way']"
                        outlined
                        v-model="book.ticket_type"
                      ></v-select>
                    </div>
                  </v-col>
                  <v-col>
                    Passenger
                    <div class="text-h5">
                      <v-select
                        :items="['1', '2', '3', '4', '5']"
                        outlined
                        v-model="book.passenger"
                      ></v-select>
                    </div>
                  </v-col>
                  <v-col>
                    With Vehicle
                    <div class="text-h5">
                      <v-select
                        :items="['Yes', 'No']"
                        outlined
                        v-model="book.isHasVehicle"
                      ></v-select>
                    </div>
                  </v-col>
                  <v-col>
                    Promo Code
                    <div class="text-h5">
                      <v-text-field
                        outlined
                        v-model="book.promo_code"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col align-self="center">
          <div class="my-5 white--text">
            <v-btn
              depressed
              color="secondary"
              @click="searchTrip"
              dark
              height="60"
            >
              Search Trips
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
export default {
  data() {
    return {
      book: {
        from: "",
        to: "",
        depart: "",
        return: "",
        ticket_type: "",
        passenger: "",
        isHasVehicle: false,
        promo_code: "",
      },
      returnMenu: false,
      departMenu: false,
      trip_selection: [
      "Dapa",
       "Surigao",
       "San Jose - Dinagat",
      ],
    };
  },
  methods: {
  async  pdfDownload() {
    
      // const doc = new jsPDF();

      // doc.text("Hello world!", 10, 10);
      // doc.save("a4.pdf");
      // const fs = require("fs");
      // const doc = new PDFDocument();
    },
    searchTrip() {
      window.location.href = `/schedules?from=${this.book.from}&to=${this.book.to}&depart=${this.book.depart}&return=${this.book.return}&isHasVehicle=${this.book.isHasVehicle}&passenger=${this.book.passenger}&ticket_type=${this.book.ticket_type}`;
    },
  },
};
</script>

<style>
</style>