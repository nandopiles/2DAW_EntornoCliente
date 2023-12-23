import { Component } from '@angular/core';
import { IKeyValue } from './home.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public elementsInfo: IKeyValue[] = [
    {
      img: 'https://cdn.vox-cdn.com/thumbor/qvJ_PVw2Ppnemy8hxFU2U3RojK0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23165626/memory2final.jpg',
      associatedImg: 'https://conductscience.com/maze/wp-content/uploads/2019/10/Diseases-and-conditions-that-affect-short-term-memory.png',
      paragraphs: [`
      <span class="first-letter">1 </span>Memoria corto plazo`,
        `Esta memoria tiene una capacidad limitada. En general, puede retener como máximo 7 ítems de manera
            simultánea. También el tiempo
            de retención de la información es breve, con un máximo de 20 segundos. Aquí la atención y la
            concentración son claves, ya que si
            estamos distraídos, la capacidad de la memoria de corto plazo se ve reducida. Además, suele mencionarse
            la memoria de trabajo aquí.
            Implica el manejo y la organización de la información para el logro de un objetivo concreto.`
      ]
    },
    {
      img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/1369847707_4085_memory-1.jpg?itok=aZRKeJXR',
      associatedImg: 'https://conductscience.com/maze/wp-content/uploads/2019/12/Diseases-and-conditions-that-affect-long-term-memory.png',
      paragraphs: [`
      <span class="first-letter">2 </span>Memoria largo plazo`,
        `La memoria de largo plazo es más estable y duradera. Dentro de ella, como ya adelantamos, se ha
      propuesto una subclasificación,
      donde encontramos la de tipo declarativa y la procedimental.`
      ]
    },
    {
      img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQDxIVFRUVFRUVDxUVFRUVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OFRAQFy0dHR0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tKystLS0tLS0tLS0tLS0tLS0tLS0tLS0rLf/AABEIALcBFAMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBAUGB//EAEEQAAICAQIDBQQHBQYGAwAAAAECABEDEiEEMUEFEyJRYTJxgaEGI0JSYnKRgpKiscEUFVODsvBEY3OT0fEzQ1T/xAAbAQEBAAIDAQAAAAAAAAAAAAAAAQIDBAUGB//EADYRAAIBAgMECQIGAgMBAAAAAAABAgMRBCExBRJBUWFxgZGhscHR8AYTIjIzYrLhQlIjkvEU/9oADAMBAAIRAxEAPwC6hUdR1PanzS4qhUdQqBcIqlVFUC5OmFSqhUC4qhUdQqBcVQqOoqgtwqKo4EQLk1ERLqKoKRUKlVFAFJMowqCmIiIzIRIgyuTUCJUUhSTJMowIgyIilxQZEQlVFBRRRxwCDCVUKgtyKhKqEgudWoVKqOU4JFQlwgEVCpYhBLkVCpcUFJqKXFUoJjhCATHCEFFFLmHiOIRPbdE/OwX+cjdldlWbsioprL2nw7cs2M+7ID/KP+8cX+IPnX61MXWp/wCy70blQqvSEu5meIzHg43C/sZMbfldT8plMyTTzWZg007NWEYiJRkmUEGKMwMGZEJRkyFFFKkwUUUqojBkTFKigBUIVFBQqEIQDrRwhBwAhUI4AoRmKQBCEKlAQhCoLcVQjhAIM1eI4sA93jGvJV6V20g8myN9hfmegMWbMzsceI1W2bLz0+aJ0bJXwH4uU6PY/Zetu6x0NyWayWZjzZmu2P4jNNSqkpSbtGN7vq1t78OTzOVRoOUowS3pS0j5X5X4LW2d0rN8xuEfJ/8ALkNfcwlsa/Fh43/eC+kzYeDxJumNATzYKNR97czPV4vouPt5PgFr+v8ASbTdi8NjFldVEarY7AkWTVcgbnWT2vgoPJub6Fn3yt7HdU9gbRqK0koLk5Zd0U/HPxPH/rM2DhsmT2FY/wC/Oe3x8IqEBUAFG9vKgB59Sf2ZnxuTe1DkL5muZ93lOJV+pP8ASl3y9EvU59H6SV/+Wt2KPq36HguN7Ac4zkz4UZVq+8COOf4vfOSOzgp+qyZMfpq1Y/d3bagB+Wp9M4xRkwsBva7eo5j5zwBnO2Xi3jYTlUilKLtldZPpvfnozrtsYBbPnTjSk3GSvnZ5rota1mrZHP8A7Y+PbiQAOmVL7n9u98Xxses3Zem9qu9iOd30qaXEcDl4U0qEpXixc2UHkcN9P+Wdvu1VHsm3B2bv5/2ur+zqFH7ibStbXln5Po0fC2hsmQYsOZcihkNg8j7tiCOhB2qMzYmmroxaabTyZMDKMmpQTHCEhRSTLkwUVRESoVBSailxQUmEdQgHWilRCQ4I4RQgg4oxCAKBjMUAUcZkwUJp8dkaxixGsmS9/uIPbye/cKB5nyVpuTS7N8erOf8A7K7v0wrfd/rbP/mTCfCK4+Xyy8TbTSzk+Hnw8m+WVuJn4bh1xqEQUB8z1LHqzHct9qdLsN9PEYz6n+JdMnhez2ygEfOj6f1mXH2XnVgwQbcrZem/nODX2hgUp4adenB2cWnOMbXVtG1zOww2DxinSxMaM5K6kmouV7O98k+R7QgzBix6jrIKkjSynl4Sa9/M0R0P6ZczoV3uue138NO9+6ZsCAKNyeoJ50eQ/wDe8+bY+tH7Dimm5ZdnHwyPp03Y18nC42NsisfNgD+l8pOPh9mUnUh5Akkj7ylr8S+h9RuNhnxZAbvwlfbBPLrd/dI3B/qDNXh8qqp06mGp2UhMhUhmLbMFoizzFzqYYjEUvyyeXDVeOnZZ9JrUjYDbkUfeao+7rPMYfo4AdWR6XUAFXeyWAFkbjmJ3+FIo6m8W7ZLBWr/CwBCgAC66S1KsRVmjYJRgORFhiK6mdrg/qHEYXfju23rXa6OSlpq+PVY0YnBYfFuDrR3ty7Wq1trbXRZaczX4XhMWI6ca1tdczXqZy/pZwd41yjmpo+4nb5/6p3aCk0BqayBdFioArf4RZMasnc5DZdSGrmdt2A6D1907fAbQf3YYpNvPO+rWj16L24ci4vCU6+FlhklFNZWVkmtHZcnZnynicZwsc2MEg78Qg5mtu9QdXA5jqB5qJtI4YBlIIIBQjkQeREz58TY3bG/tISrfDqPQij8Zy0+ozaPsZSTj8lzbu+P8rDUw/EG8xPoMWlaUXeMvXj1Pzd+LZ81cZZxkrSj6arrXPllwRvEyY4ptNQGBhcIKEmOKAKEIQUIo4jBSYSrhBTqypMJicACYCKVAFC44oARwMUFHJjMUA1e1cjLgysvt92/d/nIpP4iJsYcYVQg5IoUe5RU0+1t1xqPtZsI+C5FyOP3MbTdmCzk30L1/o3PKC6W/RL1PTdhL9Sv5iPmJtd4NWjqRY8j50fMf1mHsVfqE/aPzMWfUzLjcDdidSncoqmyOqmyFPoxo77fEtvT+5tXFvlOS/wCuXofV9k3jgMMv2RffFP1M3ZzhmKXf1jcrcAXdMw2XrsTOzlDc0rb7J5H49D6/7Gr2SyEMMdUh7sgbBSADp8tgROhOHRjZb1rX+I3VZXduRzsjDI9ONKIgyZQ1bm20BqsELodiOVlT79N+3HVvrMYoprCi+8HhDla5E6TzsC1YdLmbtcUWXSSMyKj0CaVXCuTXQplb0Gn1mbjOOxNVd3kohyWYDHjo+Es9HS13Qq7B5TmpKydrr587LcDQY8vG48mMZMTWVZSuxBrWFYC+YItbFjcek3cge9lUjzLEH9NP9ZyuH4ayrFSMaGxS5OesOFUG3YakRi5AHgUAUTOmO7AOUMxADEnW5WgCT4Sa+UxnCPBc9fLgEzn8Zn1HKBzwhHQ9dVOT8CAV+LTorjAJIG5PiPU+W88zw/GBkx5Dt3+QY3U89bZlJUj8P1o+M9RPRYaO5Rgug5Djuya5HjvprwejInEAbP4Mn5gLQ/EAj9kTynaWEviIXZ/bxHyyL4kP7wE+o9q8EOIwvhP2h4T5MN1b4EAz5niJ3DCmUlXHkymiP1E9rsPEKth3RlrDLsendmuqx4j6hwro4hYiGk/5L317yeFzjIiZBydEce5xcuanZJ8Lp/h5MiD8mrXj/gdJuTuotuKbPPTilJpacOrgEUITIgSZUUAUUIQUIQMIKIxRwgp1IQEJDghCOopAEqTCAOKEJQE1s/HoraLLNteNFLvR5Eqvsj8TaRNgzm9jViAwNtlFlj1z+ecMfbva+o5eU1zk00lx492Xb6aM3U4x3ZSedrZd+fHJZcOOqMuNGyZFd00Kmo41YqX1sNGttJKqApYVqN6ulb7kqSZnThZ87mFSd1pay/vz+Wsj2PBrpxqPIX+tn+swZAUdcjNqA1oSQAVV9Jtq5i0Autgd+RM2cY8IA6Ko/QTKuAnnPgONqb+Lry13pzffJ+59lpQjClTjpaKXcg7M43DjXKppAmVy5PIl6ylif8ydVHDC1II8wbE4Q7MVUZUs3yJo7qKX08OlR+z5yGyXRxl+YJONWINdA42O9cieREQrWy+fL3NUop6GTtHjMuLjNQQOgweEbg2zk5CGAOwGPHdjqJt9jYu9A4vKgGTIAyDn3aUdABr2ipsnnvXITVTi2cUwTIqnxLkTxBumx9k73ZHI+s3cXbmJhbAgedal+BHOcyNeDjZKz+eeXWavtyvlmdEzkfSjKBw5xnfvSMZB6qd3B9CoI+M6WDiceT2HVvcd/wBOYnnfpFkL8QuMcsa2fzPv/IL+sqWeRuoQ3qqT4ZnGw3iU4Aq42IGjNQY5QpUqS7VuCACp5+YsGe0wZC6qxBUsoJU8xYuj6ic3HxYxqPCzbi6qlB5sWOwAFk9Zj/tj5Di3ID6mKjbwBdiTz5lPL2uU7iptChRglJ3fJZvTuWnPs4Gcqb3mbfava+HhkfJlY0i6nCguwHmVHL41PmvEdprxXEPnxYnxo9GnI1FgKLEDZb22s9Te89x2rgZuFzrpVQcGTSF330k2dhPA9nZAyA+k9J9IV44v71a1nFqKV75NXz7V1eLPMfU9RwpwppXUs+1f+hwYrJmrq6Mff3SD+SrNuafAG8mc/wDOVR8MOH+pM3J7SGna/NnjKjzXUv4oUCI5MzMAijigoVFCBgooRxQAhCEFudOAkygZDhtDhC4pCDEIrhAAmEISlCc/tvSUCFdTs2nh6OlhkosHDfYoAm/TrynQnO7YcoEyKRrV6VPEe91IdSKEVm1UNQIHTfaaq35H8y4+BuofqLozXWk7aZ665rLvN7ECFAc22ka2AoFq3IHSOThyFlDFWSxel61r6GiRHNtN2s10GqavdP587j2vAcVjdqU3fLz28j7p02pRZuvQE/yHznz3hMxxurrzWq+B5T6MuUModbIIDCuoIufJ9u/T8NnTpyhJyjO+tr7y4ZW1Ty6mfRdmbaePU96KjKNslfR5Xz6Vmc1cOPNlZUIKaVbMFNq7Esqg9NtDah1pQdgQa4ztnhsdqGDEWKTxUVFkEjYUATV36TY1Vl1MGUZEGPUaHiUsUAo2Cdb7mtwB1E1OzeAxLWJ08eNVVb3VsaBkRkHLYMQb3UsRZBBPU/agleWZ2anyFkRXyrqWiWOHKt2GHdnMpse0Nuv33Ey8RhVlNKa8yNI91Hf41Unsy8rNk8izC9/HkA0Ej8OHuxz+23lOhmUhDZs+dAfoB0nGrUYqDyzS/s3Qm95Hn8nBjy93pObxvCMoJdrDFSjnfQ4I7vV5pqC79Pdy9ARNXtPGzYcip7Rxt3f5tJ0/OpwadeWSeh2Epto5+fjVfukUEh9yoBosACuF2ApdzqN9Mbc+U6uDAQS7m3OxI5KPuKPL15k/ADmcB2i3EZ0vHpUYnybkk6iQovYVsX2O+/oZ25K6lTag1Z8c78dPnbexpUt7MwHhV0sovdStFmPMVyJnybsXL4aPQ7z6+J8U7SBTJmwrsWyPhX01OV1fBbPwnuvoOvaeKTzyg/5+6PO/UlD7lOl1td9vZnY7H3wq3+JqzG+f1zFx8iB8JuTFiqgB05SwZ9LjHdSXI8JUe9Jvm35lGKKKZGNhxyYGAOK4ozBUhGEUUFsVCRCCnVhCTBwyo5McgHCKOCBCFxQAmp2ktAZgVHda3Os0rJoIZSem29/eUTbuaPaC6nxYz7Pea2H3hiS0X97Q37Ewq/l+a3VvE20fz99+qzv4X4rs1W3gyalVqZbUNpf21sXTDzjjMUzRgwnt/ofxOrDoPNNvg24+eqeInZ+i/F93xCqTs/gb3nl8wv6mdPt/Cf8A04Gokryh+JdcfdXXW0dnsfE/YxcG9Jfhfbp427D2fE4dezHwfaXSpDejWDtOfxPDEZcQGVlUl9J2Zw+g+AM12pXvGIN74xXLbqGananALnxHGxrcMrc9LKbU119R1BInylTzs3kfQ0jU7Hy4lz5sGH2QEykg2C7l0yeL7R8Cknfdje862VbBHpOLiw4+Ebvc+YDwMignnZUk+bt4ABtYFiztWjxv0sY7cNhY+1b5AVHhKjwp7TEl1obE2POWUHUdoZm6nCTzSOuOFfe9I+J+e208gn0ozuzKnDA6QL+sLdSOi78jMuXgOI4hr43iCzf/AJ8W4W+QZF2J/E2w8+p7fZnYwxgn2GauVEqq+ytkUTuxJ82PSptobIh/mvF++fd1HNhOMU960nyV8jz/ABHbXGpjfL3GFAqlnJVySFBPR7nk8v0y7VYbHGn5cQ2/fLT3H0/zjHwqYR7WbIoPQ6U8bHb8qg/mnkBw48p6/Yf03gqlOdWrTUruyvnos9fmR5nb22J0KsKdL8OV3bjd5d1jk/392q3tcU/7K40/0KJrcNhZ85diWKEh2O5OZ92JPmFJv/qTrdoHQgCDxudGEfjI2J/CACx9FmfguDXFjCLZrqebE7s7erEk/Gepw2zsNhpWoU4x52SXUsl29iPN19o1asPxybvp6v07+ReMbSpQEdTsTqWyI44oAQMUJbgUcISFFEYEwuCihC4S2KdO4CKEhwhmEUcAoQk3GYAExRRiAOaXaatS5EBJxPr0jm6UVyKB1OhyQPNVm4YpjKO8rGUJbrv8+MWHMrqHQgqwBRhyIMc52XgcmNjk4VgpY6nxvviY/eAXfGxrmLHmJj/v1EOjiMWXCfN0LYz+XIlivfU1/eUP1Pw9PDv4dTs+V1mb1h5T/S/F0f5dVtX1xTXU3Y6soMRuOY5TnjtrhT/xOD/u4x/NpLducKP+Iw/s5A3+mbHVgs3Jd69zBUaknuqDb6mfQOJ+l3DYsaPkYksBqVFLFTyN+l36+kz8J2th4vbDxC7/AGU8GSvUP4viAJ8o4r6ScLR06spAukRj8SWAoToYuF1ojZE0sVUuvPQasrfoZ5KP0zs+o39mo2+ySV+GVll136z1sdt4rD2eIo2vzvF9OT9uqx9Ox9m4lOoICx5s3iY+9juZzOH44ZHOJQAz5X1EWHRE2LFWAI8KKodbFupvcX5PhO1OMwexmYj7r+Jfd4tx8CJ1uA+l6obz8MAx9p8Vb73urb1e/tGaamw8RRvuxUl+32dvC52tHb2Fr2vJxf7vf3seyxYlRQqAADkBLnO4Dt7hM+2PMuo/YbwP8FaifhOhkcKCzGgoJY+QAsmdXOEoPdkmnyeT7nmdvCcZq8XddGZ80+m/G972iuIcuHxgH8+Snb+Hu/0M1ncKpZiAACXJ2AA5kzicP2gMmXLxWU6e8yM+/PxHwqAOZAoADym6mJsxVsgK4wQUxN7TEbh8o6eYT4nfYe7wVP7OHhTX5ks+3N36Lnz7ak/vYmVR5Rv5cF0+WrK4JGd/7Q4IsFMCkUVxk2Wf8b0proABzubhlGSZzYR3Vb58+aHVylvO/wAXzx1eZJhAmFzIgSTHJuCoq5NybhcGQ4riuEXFh3FFCQoXCK4QWx1IXFccpwh3CTGDBRxybhcWJYZMLhcVwBxR3CAK47ik3LcWTJyYEb2kQ+9QZi/u/Bz7nF/20/8AEz3C5juo2KUlozQ4jh9WTHjVKQfXZCqgKdBHd49vxHV/l/im8YQuFG1w5XsIyGW5cUoRrZuFVuYE1c3H8QA/CYMrtqUpmBa8KI4oh2a6YqeS779AbnRM1uC4YYk0g2bLZHPN3bd3P+9thNVWmqloySa6Vfuv58Lc7HLw+JnRu4yaemr8bcvU0ezuyVxnWx1v0YjZPTGv2B8/MzqCERM2Rio6GqdSU3eQ7kkwJkmUxSHcm5JhcGaQ4ooQUIrgTFBbFXFcUkyFsUYrijgoXCKEA6YMIoTI4Y45IMcEsVcLkwuQWLkxExShFQkwJkFhkwiuK5SjhcLiuClXJhckmQDMRiuBMFsMybgTIJgyGZJMZkGDJATEYjAwZCJijMkmClSbhcRMFsOFxSbgyKhcmK4Fi7k3JJhcWLYdwhFILHUuK4QlOGO4rihKVFXCEJCBcLhCUBcLhCQBcVwhKBXC4oQVhcVwhBkMyYQkBNwuEIKQTFCEGZMVxwgpJMVwhBkgkwhBRQhCAORCEMpVSYQhAIQhBT//2Q==',
      associatedImg: 'https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fnrn2850/MediaObjects/41583_2010_Article_BFnrn2850_Fig1_HTML.jpg',
      paragraphs: [`
      <span class="first-letter">3 </span>Memoria declarativa`,
        `Como parte de la memoria de largo plazo, se refiere al contenido de lo que se almacena. La memoria
            episódica nos permite recordar
            hechos concretos referidos a nuestra propia biografía y que están vinculados a un tiempo y un lugar
            determinado. En ella se alojan
            sucesos que identificamos como personales.`,
        `Por otro lado, la memoria semántica nos permite recordar en términos más generales y está vinculada a
            nuestra comprensión del mundo.
            También se aloja aquí el significado de conceptos y el vocabulario.`
      ]
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8a2YKUyrUrEEkYxECnP4zI3LXpfEhhEZhg&usqp=CAU',
      associatedImg: 'https://static.wixstatic.com/media/a7b893_49ac93653aea4e3da7f46b5de20e8ede~mv2.png/v1/fill/w_640,h_640,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a7b893_49ac93653aea4e3da7f46b5de20e8ede~mv2.png',
      paragraphs: [`
      <span class="first-letter">4 </span>Memoria procedimental`,
        `Esta otra parte de la memoria a largo plazo se refiere al cómo (el paso a paso de una receta, por
        ejemplo). Permite recuperar información sobre habilidades motoras.`,
        `En este caso, cuando la información se consolida, aparece en automático, como por inercia. No es
        necesario repasar el procedimiento una y otra vez.`
      ]
    },
    {
      img: 'https://easyscienceforkids.com/wp-content/uploads/2018/04/Memory-facts-18-4-1-758x635.jpg',
      associatedImg: 'https://i.pinimg.com/736x/66/18/74/661874b7751be9d8421e955e2af4213a.jpg',
      paragraphs: [`
      <span class="first-letter">5 </span>Memoria sensorial`,
        `Respecto al formato de la información, la memoria sensorial es aquella que registra o almacena la
      información considerando los sentidos. Nos acordamos del olor de la torta de la abuela o del tacto suave
      de nuestra mascota, por ejemplo.`
      ]
    },
    {
      img: 'https://insidememory721788887.files.wordpress.com/2018/10/memory.jpg',
      associatedImg: 'https://www.wikihow.com/images/thumb/7/75/Improve-Verbal-Memory-Step-5-Version-2.jpg/v4-460px-Improve-Verbal-Memory-Step-5-Version-2.jpg',
      paragraphs: [`
      <span class="first-letter">6 </span>Memoria verbal`,
        ` La memoria verbal se refiere a la información almacenada en formato de palabras, ya sean escritas o
        verbales.`
      ]
    },
  ];

  public isDescriptionHomeHidden: boolean = false;



  public showDetailsImg(): void {
    
  }
}
