<template>
  <div>
    <div class="row q-pa-xl">
      <div class="column q-mr-md" style="width:50%">
        <q-card flat class="" style="border-radius:12px">
          <div class="q-pl-md q-pt-md row items-center">
            <q-img src="favicon.ico" width="70px" height="70px" />
            <div class="q-pl-sm text-primary text-bold text-h6"> impuesto </div>
          </div>
          <div class="q-mt-md text-bold text-h5">ASISTENTE DE CÁLCULO DE IMPUESTO A EMISIONES CONTAMINANTES DE VEHÍCULOS NUEVOS</div>
          <div class="q-mt-md text-h7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>
          <div class="q-mt-md text-h7">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</div>
          <div class="fondo" style="width:100%;height:120%;"></div>
        </q-card>
      </div>
      <div class="q-mt-xl" style="width:45%">
        <div class="q-mt-xl">
          <q-card v-if="inicio" style="border-radius:12px">
            <div class="q-pb-md"></div>
              <div class="q-pa-md bg-blue" style="border-top-right-radius:35px;border-bottom-right-radius:35px; width:70%" >
                <div class="text-white q-ml-md text-h5" >Detalles del Vehiculo</div>
              </div>
              <div class="column q-pa-md">
                  <div class="row" style="width:100%">
                    <div class="column q-mr-md" style="width:45%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Marca:</div>
                      <q-select outlined v-model="marca" :options="marcasO" option-value="Marca" option-label="Marca" emit-value map-options
                        @input="filtrarTipos(), tipo = null, modelo = null, form.marca = marca"
                      />
                    </div>
                    <div style="width:50%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Tipo de Vehiculo:</div>
                      <q-select outlined v-model="tipo" :options="tiposO" label="Seleccione una opcion" option-value="Tipo" option-label="Tipo" emit-value map-options
                        @input="filtrarModelos(), modelo = null, form.tipo = tipo"
                      />
                    </div>
                  </div>
                  <div class="column q-mt-md">
                    <div class="text-subtitle2 text-bold q-pb-sm">Modelo:</div>
                    <q-select outlined v-model="modelo" :options="modelosO" label="Seleccione el modelo" option-value="Modelo" option-label="Modelo" map-options
                      @input="form.modelo = modelo.Modelo, form.nox = modelo.Nox, form.rendimiento = modelo.Rendimiento"
                    />
                  </div>
                  <div class="column q-mt-md">
                    <div class="text-subtitle2 text-bold q-pb-sm">Valor:</div>
                    <q-input outlined v-model="form.precio" type="number" dense label="Valor del vehiculo"/>
                  </div>
                <div class="row justify-end q-mt-md" style="width:100%">
                  <q-btn label="calcular impuesto" color="grey-5" class="q-py-xs" push @click="calcular()" />
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
      text: '',
      mostrar: false,
      options: [],
      inicio: true,
      resultado: [],
      marcasO: [],
      modelosO: [],
      tiposO: [],
      todo: [],
      marca: null,
      modelo: null,
      tipo: null,
      utm: []
    }
  },
  methods: {
    async calcular () {
      this.$q.loading.show()
      await this.$api.post('value_utm').then(res => {
        console.log(res, 'resss')
        this.$q.loading.hide()
      })
    },
    async datos () {
      await this.$api.get('consulta').then(res => {
        if (res) {
          this.todo = res
          this.noRepetirMarcas()
        }
      })
    },
    noRepetirMarcas () {
      const marcas = []
      for (const j of this.todo) {
        const search = marcas.find(v => v.Marca === j.Marca)
        if (!search) {
          marcas.push({
            Marca: j.Marca
          })
        }
      }
      this.marcasO = marcas
    },
    filtrarTipos () {
      const tipos = []
      const tiposFilter = this.todo.filter(v => v.Marca === this.marca)
      for (const j of tiposFilter) {
        const search = tipos.find(v => v.Tipo === j.Tipo)
        if (!search) {
          tipos.push({
            Tipo: j.Tipo
          })
        }
      }
      this.tiposO = tipos
    },
    filtrarModelos () {
      const modelos = []
      const modelosFilter = this.todo.filter(v => v.Tipo === this.tipo)
      for (const j of modelosFilter) {
        const search = modelos.find(v => v.Modelo === j.Modelo)
        if (!search) {
          modelos.push({
            Modelo: j.Modelo,
            Nox: j.Nox,
            Rendimiento: j.Rendimiento
          })
        }
      }
      this.modelosO = modelos
    }
  },
  mounted () {
    this.datos()
  }
}
</script>

<style>
.fondo {
  background-image: url('../../../client/public/fondo.jpeg');
  background-size: 100% 100%;
}
</style>
