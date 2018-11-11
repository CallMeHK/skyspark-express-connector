
<template>
    <div class="row">
    <div >
      <div >
        <div >
          <h3>Results</h3>
            <table class='striped'>
              <thead>
                <tr>
                    <th v-for="elt in cols"
                    v-bind:key='getKey()'
                    >{{elt}}</th> 
                </tr>
              </thead>
              <tbody>
                <tr v-for='row in rows'
                v-bind:key='getKey()'>
                  <td v-for='elt in cols' v-bind:key='getKey()'>{{ row[elt] }}</td>
                </tr>
              </tbody>
            </table>       
        </div>
      </div>
    </div> 
    </div>
</template>
<script>
import uuid from 'uuid';
export default {
  /* eslint-disable */
  props:{
    results: Object
  },
  computed:{
    cols() {
      return this.results.cols.map(elt => elt.name)
    },
    rows() {
      return this.results.rows
    }
  },
  methods:{
    getKey(){
      return uuid();
    }
  }
}
</script>
<style scoped>

</style>
