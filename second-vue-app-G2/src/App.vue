<script setup>
import SearchIcon from './components/icon/SearchIcon.vue';
import groups from '../data/groups.json';

const msg = "<span class='italic'> HELLO, v-text </span>";
const headingStyle = 'color:Red';
const buttonStyle = 'px-3 py-2 bg-indigo-300 rounded-xl';
const setInvertButton = (value) => {
  return !value;
};
let formValid = true;
const score = 70;

const splitBg = (value) => {
  if (value % 2 == 0) return 'bg-red-200';
  else return 'bg-white';
};
</script>

<template>
  <div class="w-full">
    <header>
      <section
        id="banner"
        class="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 p-2"
      >
        <img src="./assets/vue-icon.png" class="h-14" />
        <div>
          <h1 class="text-3xl text-white font-semiblod tracking-wider">
            Vue Creative Project
          </h1>
          <h2 class="text-2xl text-white italic">Learning by doing</h2>
        </div>
      </section>
    </header>
    <main>
      <section id="search" class="flex justify-end m-2">
        <div
          class="flex gap-2 items-center border border-gray-200 p-1 w-1/4 rounded-xl"
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="type your keyword."
            class="outline-none"
          />
        </div>
      </section>
      <section id="exercise" class="grid gap-2">
        <!-- v-text == {{  }}-->
        <!-- <p v-text="msg"></p> -->
        <p>Good morning {{ msg.toLowerCase() }}. Have a good day.</p>

        <!-- v-html using for Vue, That can reading HTML -->
        <p v-html="msg"></p>

        <!-- v-bind or (:) colon -->
        <!-- <h2 v-bind="(style = headingStyle)">TestTitle</h2> -->
        <h3 :style="headingStyle">TestTitle2</h3>
        <!-- if disable, tailwind will use Css after "disabled:"" -->
        <button
          v-bind:class="buttonStyle"
          v-bind:disabled="setInvertButton(false)"
          class="disabled:bg-gray-400 text-gray-700"
        >
          Click Me!!
        </button>

        <!-- v-show toggle display none or display show -->
        <button v-show="formValid" v-bind:class="buttonStyle">v-show</button>

        <!-- v-if v-else-if v-else should next to each other -->
        <!-- if it true it will be always in DOM
        , otherwise it will delete from DOM -->
        <p>score = {{ score }}</p>
        <p v-if="score >= 90">A</p>
        <p v-else-if="score >= 80">B</p>
        <p v-else-if="score >= 70">C</p>
        <p v-else-if="score >= 60">D</p>
        <p v-else>f</p>

        <!-- for loop -->
      </section>
      <section id="groupwork">
        <div class="grid grid-cols-12 font-semibold text-xl p-2">
          <h3>Section</h3>
          <h3 class="col-span-2">GroupName</h3>
          <h3 class="col-span-5">Github Repository</h3>
          <h3 class="col-spans-4">Members</h3>
        </div>
        <!-- binding ID for using instead index -->
        <!-- you can also use :class = "group.ID % 2 === 0 ? 'bg-red-200', 'bg-white'"
        for split the line of data -->
        <div
          v-for="group in groups"
          v-bind="group.ID"
          v-bind:class="splitBg(group.ID)"
          class="grid grid-cols-12 font-semibold"
        >
          <p>{{ group.section }}</p>
          <p class="col-span-2">{{ group.groupName }}</p>
          <p class="col-span-5">{{ group.repo }}</p>
          <!-- <p class="col-span-4">{{ group.members }}</p> -->
          <ul class="col-span-4 list-disc">
            <li v-for="member in group.members" v-bind:key="member.studentId">
              {{ `${member.studentId} ${member.studentName}` }}
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
