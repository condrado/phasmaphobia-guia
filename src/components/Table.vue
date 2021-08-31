<template>
  <div>
    <h2>Tipos de fantasmas</h2>
    <b-table-simple small responsive>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th  v-for="(field, index) in fields" :key=field :class="classExtraction(index)">
            {{field}}
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="item in items" :key=item.tipo>
          <b-td v-if="item.isActive">{{item.tipo}}</b-td>
          <b-td v-if="item.isActive">{{item.fortaleza}}</b-td>
          <b-td v-if="item.isActive">{{item.debilidad}}</b-td>
          <b-td v-if="item.isActive" v-html="item.pista"></b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    tableData: Object
  },
  data() {
    return {
      fields: this.tableData.fields,
      items: this.tableData.items
    }
  },
  methods: {
   classExtraction(index) {
      return 'th th-' + index
   }
  }
}
</script>

<style lang="scss">
.table {
  &.b-table {
    color: #fff;
  }

  & > :not(:last-child) > :last-child > th {
    border-bottom-color: #808080;
  }
  
  .th-0 {
    width: 125px;
  }
  .th-1,
  .th-2 {
    width: calc((100% - 225px) / 2);
  }
  .th-3 {
    width: 100px;
  }

  tr {
    border-color: transparent;
  }


  // table {
  //   width:100%;
  // }
  // thead {
  //   display: none;
  // }
  // tr:nth-of-type(2n) {
  //   background-color: inherit;
  // }
  // tr td:first-child {
  //   font-weight:bold;
  //   font-size:1.3em;
  // }
  // tbody td {
  //   display: block;
  //   text-align:center;
  // }
  // tbody td:before {
  //   content: attr(data-th);
  //   display: block;
  //   text-align:center;
  // }
}
</style>
