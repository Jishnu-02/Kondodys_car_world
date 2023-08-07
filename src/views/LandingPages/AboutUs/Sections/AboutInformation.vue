<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              title="Fully integrated"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
            <DefaultInfoCard
              color="info"
              icon="payments"
              title="Payments functionality"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="apps"
              title="Prebuilt components"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
            <DefaultInfoCard
              color="info"
              icon="3p"
              title="Improved platform"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            title="Get insights on Search"
            description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
          />
        </div>
      </div>
    </div>
  </section>
</template>
