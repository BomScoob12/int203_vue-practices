<script setup>
import { reactive, ref, computed, watch } from 'vue';
import SortIcon from './components/icons/Sort.vue';
import SearchIcon from './components/icons/SearchIcon.vue';
import groups from '../data/groups.json';
import sortBySection from './utils/SortBySection';
import { displayedRecords, getNumberOfPage } from './utils/DisplayRecords';
import searchByKeywords from './utils/SearchingKeywords';

const addingMode = ref(false);
const numOfRows = ref(10);
const currentPage = ref(1);
const workGroup = ref(
  displayedRecords(groups, currentPage.value, numOfRows.value)
);
const searchWords = ref('');
const currentFontSize = ref(12);
const player = ref('');
const isPlaying = ref(false);

const musicControl = () => {
  console.log('Player : '+player);
  console.log('Player.value' + player.value);
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    player.value.play();
  } else {
    player.value.pause();
  }
};

const newGroup = ref({
  section: '',
  groupName: '',
  repo: '',
  members: [],
});

//members:[{
//     projectCo:false,
//     studentId:'',
//     studentName:''
// },]
const numOfMembers = ref(0);
const saveNewGroup = () => {
  console.log(newGroup.value);
};

const addNewMember = () => {
  newGroup.value.members = [];
  for (let index = 0; index < numOfMembers.value; index++) {
    newGroup.value.members.push({
      projectCo: false,
      studentId: '',
      studentName: '',
    });
  }
};

const getRows = (n) => {
  currentPage.value = n;
  console.log(currentPage.value);
  workGroup.value = displayedRecords(
    groups,
    currentPage.value,
    numOfRows.value
  );
};

const filterGroups = computed(() => {
  return searchByKeywords(workGroup, searchWords.value);
});

// //* whatching value of currentPage
// watch([currentPage, numOfRows], () => {
//   console.log('watching');
//   workGroup.value = displayedRecords(
//     groups,
//     currentPage.value,
//     numOfRows.value
//   );
//   console.log(workGroup.value);
// });

watch(numOfRows, (newValue, oldValue) => {
  // console.log(`new rows per page: ${newValue}`);
  // console.log(`old rows per page: ${oldValue}`);
  getRows(1);
});
</script>

<template>
  <audio controls class="hidden" ref="player">
    <source src="./assets/rickroll.mp4" type="audio/mp4" />
  </audio>
  <div class="w-full">
    <header>
      <section
        class="flex items-center p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500"
      >
        <img src="./assets/vue.svg" class="h-14" />
        <div>
          <h1 class="text-white text-4xl">Creative Projects</h1>
          <h2 class="italic text-indigo-200 text-xl">Play and Learn</h2>
        </div>
      </section>
    </header>
    <!-- Search bar -->
    <main class="p-5">
      <div class="flex justify-between">
        <!-- music toggle -->
        <div>
          <button
          @click="musicControl">TOGGLE RICKROLL</button>
        </div>
        <div class="justify-end">
          <p>Font size :</p>
          <input
            type="number"
            min="12"
            v-model="currentFontSize"
            class="border border-gray-300 w-10"
          />
          <p class="prefered-font-size">SPATIAL TEXT</p>
        </div>
        <div
          @click="addingMode = true"
          class="font-bold italic text-blue-500 hover:text-blue-800 cursor-pointer"
        >
          Add New Groupworks
        </div>
        <div class="p-2">
          Set number of rows/page
          <input
            v-model="numOfRows"
            min="1"
            type="number"
            class="border border-gray-300 w-8"
          />
        </div>
      </div>
      <section class="flex justify-end pt-2">
        <div
          class="w-1/4 flex items-center gap-3 border border-gray-300 p-1 rounded-lg"
        >
          <SearchIcon />
          <input
            v-model="searchWords"
            class="outline-none"
            type="text"
            placeholder="type your keyword..."
          />
        </div>
      </section>

      <!-- Add new group -->
      <section v-show="addingMode">
        <div class="flex flex-col gap-2 bg-slate-100 p-3">
          <div>
            Section:
            <select v-model="newGroup.section">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            {{ newGroup.section }}
          </div>
          <div>
            Group Name:
            <input
              type="text"
              v-model.trim="newGroup.groupName"
              class="w-1/2 border border-gray-300 p-0.5 outline-none rounded-lg"
            />
            {{ newGroup.groupName }}
          </div>
          <div>
            GitHub Repository:
            <input
              type="text"
              v-model.trim="newGroup.repo"
              class="w-1/2 border border-gray-300 p-0.5 outline-none rounded-lg"
            />
            {{ newGroup.repo }}
          </div>
          <div>
            <div>
              Number of Members:
              <input
                @change="addNewMember"
                id="input-number-members"
                type="number"
                min="0"
                v-model.number="numOfMembers"
                class="border border-gray-300 p-0.5 outline-none rounded-lg"
              />
              {{ numOfMembers }}
            </div>
            <div
              v-for="(member, index) in newGroup.members"
              :key="index"
              class="flex flex-row gap-2 space-y-2 items-center"
            >
              <input type="checkbox" v-model="member.projectCo" />[Project
              Coordinator] {{ member.projectCo }} Student Id:
              <input
                v-model.number="member.studentId"
                type="text"
                class="border border-gray-300 p-0.5 outline-none rounded-lg"
              />{{ member.studentId }}
              Student Name:
              <input
                v-model.trim="member.studentName"
                type="text"
                class="border border-gray-300 p-0.5 outline-none rounded-lg"
              />{{ member.studentName }}
            </div>
            <div class="flex gap-2">
              <button
                class="px-2 py-1 bg-green-600 text-white rounded-lg"
                v-on:click="saveNewGroup"
              >
                OK
              </button>
              <button
                @click="addingMode = false"
                class="px-2 py-1 bg-red-600 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Display -->
      <section v-show="!addingMode">
        <div class="grid grid-cols-12 gap-2 font-semibold text-xl pb-3">
          <div class="flex items-center">
            <h3>Section</h3>
            <!-- Sorting Groupworks by section (ascending) -->
            <SortIcon
              @click="sortBySection(workGroup)"
              class="cursor-pointer"
            />
          </div>

          <h3 class="col-span-2">Group Name</h3>
          <h3 class="col-span-5">GitHub Repository</h3>
          <h3 class="col-span-4">Members</h3>
        </div>
        <div
          v-for="(group, index) in filterGroups"
          :key="group.ID"
          class="grid grid-cols-12 gap-2"
          :class="index % 2 === 0 ? 'bg-slate-100' : ''"
        >
          <p>{{ group.section }}</p>
          <p class="col-span-2">{{ group.groupName }}</p>
          <p class="col-span-5">{{ group.repo }}</p>
          <!-- <p class="col-span-4">{{group.members  }}</p> -->
          <ul class="col-span-4 list-disc list-inside">
            <!-- <li v-for="member in group.members">{{ member.studentId }} {{ member.studentName }}</li> -->
            <li
              v-for="{ studentId, studentName } in group.members"
              :key="studentId"
            >
              {{ `${studentId}  ${studentName}` }}
            </li>
          </ul>
          <!-- dynamic images with v-bind src -->
          <img :src='imgs/groupImages/pic-`${index + 1}`.jpg' />
        </div>
      </section>
      <!-- Paginate -->
      <section v-show="!addingMode">
        <div class="flex justify-center gap-2 pt-2">
          <button
            v-for="(n, index) in getNumberOfPage(groups, numOfRows)"
            :key="index"
            @click="getRows(n)"
            class="p-1 bg-gray-300 text-black hover:bg-blue-600 hover:text-white cursor-pointer"
            :class="currentPage === n ? 'bg-white' : ''"
          >
            {{ n }}
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.prefered-font-size {
  font-size: v-bind(currentFontSize) px;
}
</style>
