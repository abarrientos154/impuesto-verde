<template>
  <div>
    <div class="row q-px-xl q-pb-xl">
      <div class="column q-mr-md" style="width:50%">
        <q-card flat class="" style="border-radius:12px; margin-top:100px">

          <div class="q-mt-md text-bold text-h5">ASISTENTE DE CÁLCULO DE IMPUESTO A EMISIONES CONTAMINANTES DE VEHÍCULOS NUEVOS</div>
          <div class="q-mt-md text-h7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>
          <div class="q-mt-md text-h7">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</div>
          <div class="q-mt-md fondo" style="width:100%;height:100%;"></div>
        </q-card>
      </div>
      <div class="q-mt-xl" style="width:45%">
        <div class="q-mt-xl">
          <q-card v-if="inicio" style="border-radius:12px">
            <div class="column items-center justify-center">
              <div style="width:50%">
                <q-img src="logo2.svg" style="margin-top:20px"></q-img>
              </div>
            </div>
              <div class="q-pa-md bg-blue" style="border-top-right-radius:35px;border-bottom-right-radius:35px; width:70%" >
                <div class="text-white q-ml-md text-h5" >Detalles del Vehiculo</div>
              </div>
              <div class="column q-pa-md">
                  <div class="row" style="width:100%">
                    <div class="column q-mr-md" style="width:45%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Marca:</div>
                      <q-select outlined v-model="marca" :options="filterMarcas" option-value="Marca" option-label="Marca" label="Seleccione una Marca" use-input input-debounce="0" emit-value map-options
                        @input="filtrarTipos()" @filter="filterMarca"
                        :error="$v.marca.$error" @blur="$v.marca.$touch()"/>
                    </div>
                    <div style="width:50%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Tipo de Vehiculo:</div>
                      <q-select outlined v-model="tipo" :options="filterTipos" label="Seleccione una opcion" option-value="Tipo" option-label="Tipo" use-input input-debounce="0" emit-value map-options
                        @input="filtrarModelos(), modelo = null, form.tipo = tipo" @filter="filterTipo"
                        :error="$v.tipo.$error" @blur="$v.tipo.$touch()"/>
                    </div>
                  </div>
                  <div class="column q-mt-md">
                    <div class="text-subtitle2 text-bold q-pb-sm">Modelo:</div>
                    <q-select outlined v-model="modelo" :options="filterModelos" label="Seleccione el modelo" option-value="Modelo" option-label="Modelo"  use-input input-debounce="0" map-options
                      @input="form.modelo = modelo.Modelo, form.nox = modelo.Nox, form.rendimiento = modelo.Rendimiento, form.id_general = modelo._id " @filter="filterModelo"
                      :error="$v.modelo.$error" @blur="$v.modelo.$touch()"/>
                  </div>
                  <div class="column q-mt-md">
                    <div class="text-subtitle2 text-bold q-pb-sm">Valor:</div>
                    <q-input outlined v-model="form.precio" type="number" dense label="Valor del vehiculo"
                    :error="$v.form.precio.$error" @blur="$v.form.precio.$touch()"/>
                  </div>
                <div class="row justify-end q-mt-md" style="width:100%">
                  <q-btn label="calcular impuesto" color="grey-5" class="q-py-xs" push @click="calcular()" />
                </div>
              </div>
          </q-card>
          <q-card v-if="mostrar" style="border-radius:12px">
          <div class="column items-center justify-center">
              <div style="width:50%">
                <q-img src="logo2.svg" style="margin-top:20px"></q-img>
              </div>
            </div>
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
                      <div class="text-subtitle2 text-bold q-pb-sm">Valor al dia de hoy:</div>
                      <q-input outlined v-model="resultado.utm" disable />
                    </div>
                    <div style="width:50%">
                      <div class="text-subtitle2 text-bold q-pb-sm">Valor del impuesto en UTM:</div>
                      <q-input outlined v-model="resultado.costo" disable />
                    </div>
                    <div style="width:50%">
                      <div class="text-subtitle2 q-mt-md text-bold q-pb-sm">Valor del impuesto:</div>
                      <q-input outlined v-model="resultado.valor_pesos" disable prefix="CLP" />
                    </div>
                  </div>
                  <div class="row justify-end q-mt-md" style="width:100%">
                    <q-btn label="Calcular nuevamente" color="grey-5" class="q-py-xs" push @click="regreso()" />
                </div>
                </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <div class="q-pa-xl">
      <q-card flat class="q-pa-md q-mt-md">
        <div class="text-h4 text-bold q-pb-md" >CONOCE LOS VEHICULOS MAS BUSCADOS</div>
          <div class="row">
            <div style="width:25%" v-for="(item,index) in registros" :key="index" class="text-black q-pb-md">{{item.misma.Marca}} {{item.misma.Modelo}}.</div>
          </div>
      </q-card>

      <q-card flat>
        <q-img src="carro.svg"></q-img>
      </q-card>
      <div style="width:100%">
        <q-card flat class="q-pa-md q-mt-lg" style="width: 80%">
          <div class="text-h4 text-bold" >QUE ES EL IMPUESTO VERDE</div>
          <div>
            <div class="q-mt-md text-h7" >El impuesto verde es una estrategia, basada en el cobro de impuestos, que busca disminuir
              la generación de Gases de efecto invernadero producida por el parque vehícular de nuestro
              país. Esto se lleva a cabo castigando con un mayor impuesto a aquellos vehículos más
              contaminantes, y por otro lado, beneficiando con un pago de impuesto mucho más bajos a
              los vehículos con tecnologías amigables al medio ambiente.
              Este impuesto se paga una única vez al comprar vehículos motorizados nuevos, livianos
              y medianos, exceptuando algunos casos. Y no se podrán inscribir los vehículos en el
              Registro Civil sin que se acredite el pago del impuesto. </div>
            <div class="q-mt-md row">
            <div class="q-pr-sm text-h7" >El impuesto verde se estableció en la reforma tributaria realizada el año 2014, por medio de la <a href="https://www.bcn.cl/leychile/navegar?idNorma=1067194">Ley 20.780 y especificada en el Artículo 3.</a></div>
            </div>
          </div>
        </q-card>
      </div>
      <q-img src="carro.svg"></q-img>
      <div class="row justify-end" style="width:100%">
        <q-card flat class="q-pa-md q-mt-lg" style="width: 80%">
          <div class="text-h4 text-right text-bold" >QUIEN NO PAGA IMPUESTO VERDE</div>
          <div class="q-mt-lg text-h7 text-right text-bold" >El uso de vehículos en los siguientes casos, o vehículos con las siguientes características, están exentos de pagar el impuesto verde:</div>
            <div class="q-mt-md">
              <q-card flat class="row justify-end" v-for="(item,index) in listado" :key="index" >
                <div class="row">
                  <div>{{index+1 + '-'}} </div>
                  <div class="q-pl-xs text-black">{{item.nombre}} </div>
                  <div v-if="item.descripcion" class="q-pl-xs text-black">{{'(' + item.descripcion + ')'}} </div>
                </div>
              </q-card>
            </div>
            <div class="q-mt-md text-h7 text-right text-bold" >Sobre los vehículos que fueron inscritos como táxi:</div>
            <div class="q-mt-xs text-h7 text-right" >Los contribuyentes a que una vez pagado el vehículo lo registren para prestar servicios de taxi, en cualquiera de sus modalidades, tendrán derecho a una devolución del impuesto, el cual se hará por medio de la <a class="text-primary" href="https://www.tgr.cl/"> Tesorería General de la República.</a> Para ello deberán contar con el comprobante de pago, el que deberá hacer referencia al número de inscripción del vehículo</div>
        </q-card>
        </div>

        <q-img src="carro.svg"></q-img>
        <q-card flat class="q-pa-md q-mt-lg" style="width: 80%">
          <div class="text-h4 text-bold" >¿CÓMO SE CALCULA EL IMPUESTO VERDE?</div>
          <div class="q-mt-lg text-h7 text-bold" >El cálculo del impuesto verde se detalla en el artículo 3 de la reforma tributaria, Ley 20.780 de 2014, y depende de los siguientes parámetros y variables:</div>
            <div class="q-px-md q-mt-md">
              <div>Parámetros del vehículo:</div>
              <div>- Rendimiento urbano (km/lt)</div>
              <div>- Emisión de NOx (g/km)</div>
              <div>Estos parámetros son preestablecidos al seleccionar el modelo del vehículo, y son datos que se actualizan bajo la responsabilidad del Ministerio de Transportes y Telecomunicaciones. Puedes verificar el listado completo de vehículos nuevos y sus parámetros <a class="text-primary" href="https://www4.sii.cl/calcImpVehiculoNuevoInternet/internet.html?modulo=listado">en esta página de servicios impuestos internos.</a></div>
              <div>Variables del vehículo:</div>
              <div>Precio de venta ($)</div>
              <div>Esta variable es determinada por el usuario y corresponde al precio de venta del vehículo en la automotora.</div>
              <div class="text-bold q-mt-md">Cálculo del impuesto verde</div>
              <div style="width:500px">
                <q-img src="formula.png"></q-img>
                <div>El resultado del cálculo anterior entregará un valor numérico medido en <a class="text-primary" href="https://es.wikipedia.org/wiki/Unidad_tributaria_mensual"> Unidades Tributarias Mensuales</a>, el cual debe multiplicarse por el valor actual de la UTM, que se puede verificar en el <a href="https://bcentral.cl/">Banco Central</a>, y eso corresponde al valor final. </div>
              </div>
            </div>
        </q-card>

        <q-img src="carro.svg"></q-img>
        <q-card flat class="q-pa-md q-mt-lg" style="width: 80%">
          <div class="text-h4 text-bold" >¿CÓMO SE PAGA EL IMPUESTO VERDE?</div>
          <div class="q-mt-lg text-h7" >El formulario se paga por internet en la Tesorería general de la república al realizar la <a href="https://www.tgr.cl/tramites-tgr/declaracion-y-pago-impuesto-verde-a-fuentes-moviles/">Declaración y Pago Impuesto Verde a Fuentes Móviles, l</a>, la cual se realiza por medio del Formulario 88. </div>
            <div class="q-mt-md text-bold">¿Qué necesito para realizar el pago del impuesto?</div>
            <div>La factura de compra del vehículo o declaración de ingreso (DIN).</div>
        </q-card>

    </div>
      <div class="column items-center justify-center">
        <div style="width:20%">
          <q-img src="logo.svg"></q-img>
        </div>
        <div class="q-pb-xl text-h7" >Impuesto verde Power by SEO Proyectos I  Desarrollado por EICHE</div>
      </div>

  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {},
      text: '',
      mostrar: false,
      options: [],
      filterMarcas: this.marcasO,
      filterTipos: this.tiposO,
      filterModelos: this.modelosO,
      inicio: true,
      resultado: [],
      marcasO: [],
      modelosO: [],
      tiposO: [],
      todo: [],
      registros: [],
      marca: null,
      modelo: null,
      tipo: null,
      buscado: {},
      utm: [],
      listado: [
        {
          nombre: 'Transporte de pasajeros',
          descripcion: 'Capacidad mayor a 9 asientos incluído chofer'
        },
        {
          nombre: 'Servicio de Taxi',
          descripcion: 'Cualquier modalidad'
        },
        {
          nombre: 'Camiones, camionetas y furgones',
          descripcion: 'De capacidad de carga útil mayor a 2.000 Kg'
        },
        {
          nombre: 'Furgones cerrados',
          descripcion: 'De capacidad menor a 2.000 Kg'
        },
        {
          nombre: 'Camionetas menor a 2.000 Kg',
          descripcion: 'Siempre y cuando sean activos inmovilizados del contribuyente'
        },
        {
          nombre: 'Tractores',
          descripcion: ''
        },
        {
          nombre: 'Carretillas móviles',
          descripcion: ''
        },
        {
          nombre: 'Vehículos eléctricos',
          descripcion: ''
        },
        {
          nombre: 'Casa rodante',
          descripcion: ''
        },
        {
          nombre: 'Vehículos fuera de carretera',
          descripcion: ''
        },
        {
          nombre: 'Coches celulares',
          descripcion: ''
        },
        {
          nombre: 'Coches ambulancia',
          descripcion: ''
        },
        {
          nombre: 'Coches Mortuorios',
          descripcion: ''
        },
        {
          nombre: 'Coches blindados',
          descripcion: ''
        }
      ]
    }
  },
  validations: {
    form: {
      precio: { required }

    },
    marca: { required },
    modelo: { required },
    nox: { required },
    rendimiento: { required },
    tipo: { required }

  },
  methods: {
    async calcular () {
      this.$v.form.$touch()
      this.$v.marca.$touch()
      this.$v.modelo.$touch()
      this.$v.tipo.$touch()
      if (!this.$v.form.$error && !this.$v.marca.$error && !this.$v.modelo.$error && !this.$v.tipo.$error) {
        this.$q.loading.show()
        await this.$api.post('value_utm').then(res => {
          this.utm = res
          this.inicio = false
          this.mostrar = true
          const resul1 = (35 / this.form.rendimiento)
          const resul2 = (120 * this.form.nox)
          const resul3 = resul1 + resul2
          const resul4 = (this.form.precio * 0.00000006)
          const resul5 = resul3 * resul4
          this.resultado.costo = parseFloat(resul5)
          this.resultado.nox = this.form.nox
          this.resultado.rendimiento = this.form.rendimiento
          this.resultado.utm = parseFloat(this.utm.searched_utm_value)
          this.form.valor_utm = parseFloat(this.resultado.utm)
          this.resultado.valor_pesos = (this.resultado.utm * this.resultado.costo)
          this.form.precio = parseFloat(this.form.precio)
          this.form.impuesto = this.resultado.costo
          this.form.valor_pesos = this.resultado.valor_pesos
          this.registro()
          this.resultado.utm = this.formatPrice(this.resultado.utm)
          this.resultado.costo = this.formatPrice(this.resultado.costo)
          this.resultado.valor_pesos = this.formatPrice(this.resultado.valor_pesos)
          console.log(this.resultado)
          console.log(this.form, 'formulario')
          this.$q.loading.hide()
        })
      } else {
        this.$q.notify({
          message: 'Faltan campos por llenar',
          color: 'negative'
        })
      }
    },
    async datos () {
      this.$q.loading.show()
      await this.$api.get('consulta').then(res => {
        if (res) {
          this.todo = res
          this.noRepetirMarcas()
        }
        this.$q.loading.hide()
      })
    },
    async prueba () {
      await this.$api.get('consulta_datos').then(res => {
        if (res) {
          this.registros = res
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
      this.tipo = null
      this.modelo = null
      this.form.marca = this.marca
      this.modelosO = []
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
            Rendimiento: j.Rendimiento,
            _id: j._id
          })
        }
      }
      this.modelosO = modelos
    },
    filterMarca (val, update) {
      if (val === '') {
        update(() => {
          this.filterMarcas = this.marcasO
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.filterMarcas = this.marcasO.filter(v => v.Marca.toLowerCase().indexOf(needle) > -1)
      })
    },
    filterTipo (val, update) {
      if (val === '') {
        update(() => {
          this.filterTipos = this.tiposO
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.filterTipos = this.tiposO.filter(v => v.Tipo.toLowerCase().indexOf(needle) > -1)
      })
    },
    filterModelo (val, update) {
      if (val === '') {
        update(() => {
          this.filterModelos = this.modelosO
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.filterModelos = this.modelosO.filter(v => v.Modelo.toLowerCase().indexOf(needle) > -1)
      })
    },
    async registro () {
      this.$api.post('registro', this.form).then(res => {
        if (res) {
          console.log(this.form, 'form')
        }
      })
    },
    regreso () {
      this.$v.form.$reset()
      this.$v.marca.$reset()
      this.$v.modelo.$reset()
      this.$v.tipo.$reset()
      this.resultado = {}
      this.form = {}
      this.tipo = null
      this.modelo = null
      this.marca = null
      this.inicio = true
      this.mostrar = false
    },
    formatPrice (value) {
      const val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  },
  mounted () {
    this.datos()
    this.prueba()
  }
}
</script>

<style>
.fondo {
  background-image: url('../../../client/public/fondo.jpeg');
  background-size: 100% 100%;
}
</style>
