<template>
  <div>
    <div class="row q-px-xl q-pb-xl">
      <div class="column q-mr-md" style="width:50%">
        <q-card flat class="" style="border-radius:12px">
          <div class="q-pl-md q-pt-md row items-center">
            <q-img src="favicon.ico" width="70px" height="70px" />
            <div class="q-pl-sm text-primary text-bold text-h6"> impuesto </div>
          </div>
          <div class="q-mt-md text-bold text-h5">ASISTENTE DE CÁLCULO DE IMPUESTO A EMISIONES CONTAMINANTES DE VEHÍCULOS NUEVOS</div>
          <div class="q-mt-md text-h7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>
          <div class="q-mt-md text-h7">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</div>
          <div class="fondo" style="width:100%;height:70%;"></div>
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
          <q-card v-if="mostrar" style="border-radius:12px">
            <div class="q-pb-md"></div>
            <div class="column justify-end items-end">
              <div class="q-py-sm bg-blue column justify-start items-start" style="border-top-left-radius:35px;border-bottom-left-radius:35px; width:70%" >
                <div class="row justify-center items-center">
                  <div class="q-mr-xl">
                    <q-icon class="text-white" size="xl" name="chevron_left" />
                  </div>
                  <div class="text-white text-h5" >Resultados</div>
                </div>
              </div>
            </div>
              <div class="column q-pa-md">
                <div class="column q-pa-md">
                  <div class="row" style="width:100%">
                    <div class="column q-mr-md" style="width:45%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Emisiones NOx:</div>
                      <q-input outlined v-model="resultado.nox" disable />
                    </div>
                    <div style="width:50%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Rendimiento Urbano:</div>
                      <q-input outlined v-model="resultado.rendimiento" disable />
                    </div>
                  </div>
                  <div class="row q-mt-md" style="width:100%">
                    <div class="column q-mr-md" style="width:45%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Carga útil:</div>
                      <q-input outlined v-model="resultado.carga" disable />
                    </div>
                    <div style="width:50%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Numero de asientos:</div>
                      <q-input outlined v-model="resultado.asiento" disable />
                    </div>
                  </div>
                  <div class="row q-mt-md" style="width:100%">
                    <div class="column q-mr-md" style="width:45%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Valor al dia de hoy:</div>
                      <q-input outlined v-model="resultado.utm" disable />
                    </div>
                    <div style="width:50%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Impuesto a Pagar:</div>
                      <q-input outlined v-model="resultado.costo" disable />
                    </div>
                  </div>
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
        this.utm = res
        this.inicio = false
        this.mostrar = true
        console.log(this.utm, 'respuesta')
        console.log(this.form, 'form')
        const resul1 = (35 / this.form.rendimiento)
        const resul2 = (120 * this.form.nox)
        const resul3 = resul1 + resul2
        const resul4 = (this.form.precio * 0.00000006)
        const resul5 = resul3 * resul4
        this.resultado.costo = resul5
        this.resultado.nox = this.form.nox
        this.resultado.rendimiento = this.form.rendimiento
        this.resultado.utm = this.utm.searched_utm_value
        console.log(this.resultado)
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
