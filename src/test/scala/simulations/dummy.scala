package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class dummy extends Simulation {


  //header definition
  val httpConf = http.baseUrl("http://www.example.com/")
    .header("Accept", "application/json")
  //.proxy(Proxy("localhost",8888))

  //scenario definition
  val scn = scenario("Load Test")
    .exec(http("get1")
      .get("/"))

  setUp(scn
    .inject(
      rampConcurrentUsers(0) to 10 during 30.seconds,
      constantConcurrentUsers(10) during 60.seconds,
      rampConcurrentUsers(10) to 20 during 60.seconds,
      constantConcurrentUsers(50) during 450.seconds
    ).protocols(httpConf))
}