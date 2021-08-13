<template>
  <div class="window-width">
    <div class="column items-center q-mt-md">
      <div class="q-pl-md q-pt-md row items-center">
        <q-img src="favicon.ico" width="70px" height="70px" />
        <div class="q-pl-sm text-primary text-bold text-h6"> impuesto </div>
      </div>
      <div class="column justify-center">
        <div class="col-xs-grow col-sm-6 col-md-6 q-pa-md">
          <q-card class="q-pa-xl" style="border-radius:12px; width:450px">
            <div class="text-bold text-h5">Iniciar sesión</div>
            <div class="column q-mt-lg">
              <div class="column">
                <div class="column">
                <div class="text-grey text-bold q-pb-sm text-uppercase"> Selecciona la marca </div>
                  <q-select filled v-model="form.marca" :options="options" />
                  <div class="text-grey text-bold q-pb-sm text-uppercase"> Selecciona el tipo </div>
                  <q-select filled v-model="form.tipo" :options="options" />
                  <div class="text-grey text-bold q-pb-sm text-uppercase"> Selecciona el modelo </div>
                  <q-select filled v-model="form.modelo" :options="options" />
                </div>

                <div class="column q-mt-lg">
                  <div class="text-grey text-bold q-pb-sm text-uppercase"> Precio de venta </div>
                  <q-input v-model="form.precio" type="number" outlined dense />
                </div>
              </div>

              <div class="q-mt-sm">
                <q-btn label="calcular" color="primary" class="full-width q-py-xs" push @click="calcular()" />
              </div>

            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      options: []
    }
  },
  methods: {
    async calcular () {
      await this.$axios.get('https://docs.google.com/spreadsheets/d/1FLUfmB4rY_hJpaG9jw9LiWKXb4JVX-Zl1xJtQyV-oJA/edit#gid=0').then(res => {
        console.log(res, 'respuesta')
      })
    }
  }
}
</script>

<style>

</style>
