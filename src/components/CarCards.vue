<script setup>
import CarCard from "../examples/cards/blogCards/CenteredBlogCard.vue";
</script>

<style scoped>
.car-list-row {
    display: flex;
    flex-wrap: wrap;
}
@media (max-width: 425px) {
  .container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>

<template>
  <div class="container car-list-row mt-5">
    <div class="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-6">
      <CarCard
        image="https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        title="Get insights on Search"
        description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
      />
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-6">
      <CarCard
        image="https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        title="Get insights on Search"
        description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
      />
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-6">
      <CarCard
        image="https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        title="Get insights on Search"
        description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
      />
    </div>
  </div>
</template>
