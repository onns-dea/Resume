<style lang="scss" scoped>
.resume {
  padding: 70px 60px;
}
</style>

<template>
  <div class="resume">
    <PersonalInfo/>
    <Skills/>
    <WorkExperience/>
    <PeojectExperience/>
    <SelfEvaluation/>
  </div>

</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const PersonalInfo = defineAsyncComponent(() => import('./components/PersonalInfo.vue'))
const Skills = defineAsyncComponent(() => import('./components/Skill.vue'))
const WorkExperience = defineAsyncComponent(() => import('./components/WorkExperience.vue'))
const PeojectExperience = defineAsyncComponent(() => import('./components/ProjectExperience.vue'))
const SelfEvaluation = defineAsyncComponent(() => import('./components/SelfEvaluation.vue'))
</script>
