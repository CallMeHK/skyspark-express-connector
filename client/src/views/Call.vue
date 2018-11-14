<template>
    <div class="home container">
    <div class="row">
    <div class="col s12 m12">
      <div class="card">
        <div class="card-content">
          <span class="card-title title-text">Write Queries</span>
            <p>Use this page to write axon queries.  Your auth token has been stored in vuex, 
                so you may move from tab to tab on this page without losing auth, but you will 
                need to log in again if you refresh or exit the page.  The query url is set up for 
                axon queries.  I will add more direct ways to query stuff outside of axon queries 
                later.
            </p>
            <p>You may press ENTER in the text area to add a new line.  New lines and spaces will be removed before passing the query on.</p>
            <br>
            <div class="row">
                <div class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                    <textarea :value="query" @input="queryOnChange" id="textarea1" class="materialize-textarea"></textarea>
                    <label class='active' for="textarea1">Axon Query</label>
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                    <textarea :value='queryAuth' @input='urlOnChange' id="textarea2" class="materialize-textarea"></textarea>
                    <label class='active' for="textarea1">Axon Query URL (editing this does nothing, still working on this func)</label>
                    </div>
                </div>
                </div>
            </div>
            <div class="card-action">
                <button @click='sendQuery' class="waves-effect waves-light btn">Submit Query</button>
            </div>
        </div>
      </div>
    </div> 
    </div>
    <Results v-bind:results="result"></Results>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MakeCalls from "@/MakeCalls";
import Results from "@/components/Results";

export default {
  name: "call",
  components:{
      Results
  },
  data: function() {
    return {
      queryUrl: "",
      result:{cols:[{name:'NA'}],
            rows:[{NA:'none'}]}
    };
  },
  computed: {
    ...mapGetters(["host", "auth", "query"]),
    axon() {
      let val = this.query.replace(/\s/g, "%20");
      return val.replace(/(\r\n\t|\n|\r\t)/gm, "");
    },
    queryAuth() {
      return `${this.host}/eval?expr=${this.axon}`;
    }
  },
  methods: {
    ...mapActions(["queryInput"]),
    queryOnChange(e) {
      this.queryInput(e.target.value);
    },
    async sendQuery() {
        this.result = await MakeCalls.sendQuery(this.queryAuth,this.auth);
    },
    urlOnChange(e) {
      this.queryUrl = e.target.value;
    }
  }
};
</script>

<style scoped>
.title-text {
  font-weight: 600;
}
</style>
