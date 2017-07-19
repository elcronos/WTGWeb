<template>
  <div class="table-products">
    <!-- Table -->
    <el-dialog title="Please select one product" :visible.sync="dialogVisible">
      <el-table :data="data">
        <el-table-column property="name" label="Name" width="200"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['data', 'dialogVisible'],
  data: () => ({

  }),
  created() {

  },
  methods: {

  }
}
</script>

<style>

</style>
