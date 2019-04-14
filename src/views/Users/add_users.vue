<template>
    <div id="new-expense-modal" class="modal fade" role="dialog">
        <div class="modal-dialog" style="margin-top:60px;">

            <section class="panel panel-default">
            <header class="panel-heading font-bold">New User</header>

            <div class="panel-body">

                <form role="form">
                <h5 class="text-center text-black">Enter Details For New Expense</h5>

                <div class="form-group">
                    <label>Select Customer</label>
                    <select class="form-control">
                        <option>Customer 1</option>
                        <option>Customer 2</option>
                        <option>Customer 3</option>
                    </select>
                </div>

                <hr>
                <h5 class="text-center text-black">Specify the Quantities & Unit prices</h5>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>Chick</label>
                            <input type="text" class="form-control" placeholder="Enter number of chicks">
                        </div>
                        <div class="form-group">
                            <label>Unit price (chick)</label>
                            <input type="text" class="form-control" placeholder="Enter Unit of chicks">
                        </div>
                        <div class="form-group">
                            <label>Total (chick)</label>
                            <input type="text" class="form-control" placeholder="Enter Unit of chicks">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>Fowls</label>
                            <input type="text" class="form-control" placeholder="Enter number of fowls">
                        </div>
                        <div class="form-group">
                            <label>Unit price (fowls)</label>
                            <input type="text" class="form-control" placeholder="Enter Unit of Fowls">
                        </div>
                        <div class="form-group">
                            <label>Total (fowls)</label>
                            <input type="text" class="form-control" placeholder="Enter Unit of chicks">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>Hens</label>
                            <input type="text" class="form-control" placeholder="Enter number of hens">
                        </div>
                        <div class="form-group">
                            <label>Unit price (Hens)</label>
                            <input type="text" class="form-control" placeholder="Enter Unit of hens">
                        </div>
                        <div class="form-group">
                            <label>Total (Hen)</label>
                            <input type="text" class="form-control" placeholder="Enter Unit of chicks">
                        </div>
                    </div>
                </div>

                <hr>
                <div class="form-group">
                    <label>Describe this log</label>
                    <textarea class="form-control" rows="5" placeholder="Description"></textarea>
                </div>
                </form>

                <button type="submit" class="btn btn-info">Submit</button>
                    <button type="button" class="btn btn-danger pull-right" @click="dismissModal">Cancel</button>
            </div>

            </section>

        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {

        }
    },

    methods: {
        ...mapActions({
            shouldAddExpense: 'Expense/shouldAddExpense'
        }),

        dismissModal () {
            $('#new-expense-modal').modal('hide');
            this.shouldAddExpense(false)
        }
    }
}
</script>

<style>
    label, .text-black{
        color: black !important;
    }
</style>
