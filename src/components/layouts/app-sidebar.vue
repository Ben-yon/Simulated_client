<template>
<aside class="bg-dark lter aside-md hidden-print" id="nav">
    <section class="vbox">
        <section class="w-f scrollable">
            <div class="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="5px" data-color="#333333">

            <!-- nav -->
            <nav class="nav-primary hidden-xs">
                <ul class="nav">
                <router-link :to="{name: 'dashboard'}" active-class="active-link" tag="li" class="active">
                    <a href="javascript:void(0)"   class="active">
                    <i class="fa fa-dashboard icon">
                        <b class="bg-danger"></b>
                    </i>
                    <span>General Reports</span>
                    </a>
                </router-link>

                <li >
                    <a href="#layout"  >
                    <i class="fa fa-laptop icon">
                        <b class="bg-warning"></b>
                    </i>
                    <span class="pull-right">
                        <i class="fa fa-angle-down text"></i>
                        <i class="fa fa-angle-up text-active"></i>
                    </span>
                    <span>Classes</span>
                    </a>
                    <ul class="nav lt">
                        <router-link :to="{name: 'animals_all'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>All classes</span>
                            </a>
                        </router-link>
                        <li >
                            <a href="javascript:void(0)" @click="addClass">
                            <i class="fa fa-angle-right"></i>
                            <span>Add class</span>
                            </a>
                        </li>
                        <router-link :to="{name: 'animals_deaths'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)">
                            <i class="fa fa-angle-right"></i>
                            <span>Edit</span>
                            </a>
                        </router-link>
                        <router-link :to="{name: 'animals_reports'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)">
                            <i class="fa fa-angle-right"></i>
                            <span>Class Reports</span>
                            </a>
                        </router-link>
                    </ul>
                </li>

                <li >
                    <a href="#uikit"  >
                    <i class="fa fa-book icon">
                        <b class="bg-success"></b>
                    </i>
                    <span class="pull-right">
                        <i class="fa fa-angle-down text"></i>
                        <i class="fa fa-angle-up text-active"></i>
                    </span>
                    <span>Courses</span>
                    </a>
                    <ul class="nav lt">
                        <router-link :to="{name: 'sales_all'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>All courses</span>
                            </a>
                        </router-link>

                         <li >
                            <a @click="newSale" href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>New course</span>
                            </a>
                        </li>

                        <router-link :to="{name: 'sales_reports'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>Course Report</span>
                            </a>
                        </router-link>
                    </ul>
                </li>

                <li >
                    <a href="#pages"  >
                    <i class="fa fa-group icon">
                        <b class="bg-primary"></b>
                    </i>
                    <span class="pull-right">
                        <i class="fa fa-angle-down text"></i>
                        <i class="fa fa-angle-up text-active"></i>
                    </span>
                    <span>Professors</span>
                    </a>
                    <ul class="nav lt">
                        <router-link :to="{name:'expenses_all'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)">
                            <i class="fa fa-angle-right"></i>
                            <span>All Professors</span>
                            </a>
                        </router-link>
                         <li >
                            <a @click="newExpense" href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>New Professor</span>
                            </a>
                        </li>
                        <router-link :to="{name: 'expenses_reports'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>Professor Reports</span>
                            </a>
                        </router-link>
                    </ul>
                </li>
                 <li >
                    <a href="#pages"  >
                    <i class="fa fa-home icon">
                        <b class="bg-primary"></b>
                    </i>
                    <span class="pull-right">
                        <i class="fa fa-angle-down text"></i>
                        <i class="fa fa-angle-up text-active"></i>
                    </span>
                    <span>Rooms</span>
                    </a>
                    <ul class="nav lt">
                        <router-link :to="{name:'expenses_all'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)">
                            <i class="fa fa-angle-right"></i>
                            <span>All Rooms</span>
                            </a>
                        </router-link>
                         <li >
                            <a @click="newExpense" href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>New Room</span>
                            </a>
                        </li>
                        <router-link :to="{name: 'expenses_reports'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>Room Reports</span>
                            </a>
                        </router-link>
                    </ul>
                </li>
                 <li >
                    <a href="#pages"  >
                    <i class="fa fa-clock-o icon">
                        <b class="bg-primary"></b>
                    </i>
                    <span class="pull-right">
                        <i class="fa fa-angle-down text"></i>
                        <i class="fa fa-angle-up text-active"></i>
                    </span>
                    <span>Timeslots</span>
                    </a>
                    <ul class="nav lt">
                        <router-link :to="{name:'expenses_all'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)">
                            <i class="fa fa-angle-right"></i>
                            <span>All Timeslots</span>
                            </a>
                        </router-link>
                         <li >
                            <a @click="newExpense" href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>New Timeslot</span>
                            </a>
                        </li>
                        <router-link :to="{name: 'expenses_reports'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>Professor Reports</span>
                            </a>
                        </router-link>
                    </ul>
                </li>
                <li >
                    <a href="#pages"  >
                    <i class="fa fa-calendar-o icon">
                        <b class="bg-primary"></b>
                    </i>
                    <span class="pull-right">
                        <i class="fa fa-angle-down text"></i>
                        <i class="fa fa-angle-up text-active"></i>
                    </span>
                    <span>Timetable</span>
                    </a>
                    <ul class="nav lt">
                        <router-link :to="{name:'expenses_all'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)">
                            <i class="fa fa-angle-right"></i>
                            <span>All Timeslots</span>
                            </a>
                        </router-link>
                         <li >
                            <a @click="newExpense" href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>New Timeslot</span>
                            </a>
                        </li>
                        <router-link :to="{name: 'expenses_reports'}" tag="li" active-class="active-link">
                            <a href="javascript:void(0)" >
                            <i class="fa fa-angle-right"></i>
                            <span>Professor Reports</span>
                            </a>
                        </router-link>
                    </ul>
                </li>

                <li >
                    <a href="mail.html"  >
                    <b class="badge bg-danger pull-right">3</b>
                    <i class="fa fa-envelope-o icon">
                        <b class="bg-primary dker"></b>
                    </i>
                    <span>Email</span>
                    </a>
                </li>

               

                <li >
                    <a href="notebook.html"  >
                    <i class="fa fa-user icon">
                        <b class="bg-info"></b>
                    </i>
                    <span>Manage Users</span>
                    </a>
                </li>

                </ul>
            </nav>
            <!-- / nav -->
            </div>
        </section>

        <footer class="footer lt hidden-xs b-t b-dark">
            <div id="chat" class="dropup">
            <section class="dropdown-menu on aside-md m-l-n">
                <section class="panel bg-white">
                <header class="panel-heading b-b b-light">Active chats</header>
                <div class="panel-body animated fadeInRight">
                    <p class="text-sm">No active chats.</p>
                    <p><a href="#" class="btn btn-sm btn-default">Start a chat</a></p>
                </div>
                </section>
            </section>
            </div>
            <div id="invite" class="dropup">
            <section class="dropdown-menu on aside-md m-l-n">
                <section class="panel bg-white">
                <header class="panel-heading b-b b-light">
                    John <i class="fa fa-circle text-success"></i>
                </header>
                <div class="panel-body animated fadeInRight">
                    <p class="text-sm">No contacts in your lists.</p>
                    <p><a href="#" class="btn btn-sm btn-facebook"><i class="fa fa-fw fa-facebook"></i> Invite from Facebook</a></p>
                </div>
                </section>
            </section>
            </div>
            <a href="#nav" data-toggle="class:nav-xs" class="pull-right btn btn-sm btn-dark btn-icon">
            <i class="fa fa-angle-left text"></i>
            <i class="fa fa-angle-right text-active"></i>
            </a>
            <div class="btn-group hidden-nav-xs">
            <button type="button" title="Chats" class="btn btn-icon btn-sm btn-dark" data-toggle="dropdown" data-target="#chat"><i class="fa fa-comment-o"></i></button>
            <button type="button" title="Contacts" class="btn btn-icon btn-sm btn-dark" data-toggle="dropdown" data-target="#invite"><i class="fa fa-facebook"></i></button>
            </div>
        </footer>
    </section>
    <new-class/>
</aside>
</template>

<script>
import newClass  from './../../views/Classes/new_class.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        newClass
    },
    computed: {
        ...mapGetters({
            shouldAddClass : 'classes/shouldAddClass'
        }),
    },
    watch: {
        shouldAddClass(){
            if(this.shouldClass){
                this.newClass();
            }
        }
    },

    methods: {
        newClass(){
            $('#new-class-modal').modal({backdrop:'static'})
        }
    }

}
</script>